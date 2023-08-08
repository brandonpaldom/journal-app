import { createSlice } from '@reduxjs/toolkit'

/**
 * @typedef {Object} Note
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string[]} imagesUrl
 * @property {number} date
 */

/**
 * @type {Object} initialState
 * @property {boolean} isSaving
 * @property {string} messageSaved
 * @property {Note[]} notes
 * @property {Note|null} active
 */

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    creatingNewNoteAction: (state) => {
      state.isSaving = true
    },
    addNewEmptyNoteAction: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNoteAction: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSavingAction: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNoteAction: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      state.messageSaved = 'Note updated successfully'
    },
    setPhotosUrlAction: (state, action) => {
      state.active.imagesUrl = action.payload
      state.isSaving = false
    },
    clearNotesLogoutAction: () => {
      return initialState
    },
    deleteNoteAction: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
  },
})

export const {
  creatingNewNoteAction,
  addNewEmptyNoteAction,
  setActiveNoteAction,
  setNotes,
  setSavingAction,
  updateNoteAction,
  setPhotosUrlAction,
  clearNotesLogoutAction,
  deleteNoteAction,
} = journalSlice.actions

export default journalSlice.reducer
