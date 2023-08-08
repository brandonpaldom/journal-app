import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'

import { firebaseDB } from '../../firebase/config'
import { loadNotes } from '../../helpers/loadNotes'
import {
  addNewEmptyNoteAction,
  creatingNewNoteAction,
  deleteNoteAction,
  setActiveNoteAction,
  setNotes,
  setPhotosUrlAction,
  setSavingAction,
  updateNoteAction,
} from './journalSlice'
import { fileUpload } from '../../helpers/fileUpload'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(creatingNewNoteAction())
    const { uid } = getState().auth
    const newNote = {
      title: '',
      body: '',
      imagesUrl: [],
      date: new Date().getTime(),
    }
    const newDoc = await doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id
    dispatch(addNewEmptyNoteAction(newNote))
    dispatch(setActiveNoteAction(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSavingAction())
    const { uid } = getState().auth
    const { active: note } = getState().journal
    const noteToFirestore = { ...note }
    delete noteToFirestore.id
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, noteToFirestore, { merge: true })
    dispatch(updateNoteAction(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSavingAction())
    const photosUrl = []
    for (const file of files) {
      const fileUrl = await fileUpload(file)
      photosUrl.push(fileUrl)
    }
    dispatch(setPhotosUrlAction(photosUrl))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)
    dispatch(deleteNoteAction(note.id))
    dispatch(setActiveNoteAction(null))
  }
}
