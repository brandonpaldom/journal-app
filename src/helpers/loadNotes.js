import { collection, getDocs } from 'firebase/firestore/lite'
import { firebaseDB } from '../firebase/config'

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(
    collection(firebaseDB, `${uid}/journal/notes`),
  )
  const notes = []
  notesSnap.forEach((snap) => {
    notes.push({
      id: snap.id,
      ...snap.data(),
    })
  })
  return notes
}
