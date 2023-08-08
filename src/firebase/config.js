import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDaFU4OPlWlWk9QarwLA8B7pDN2qLQLtSo',
  authDomain: 'journal-app-383b1.firebaseapp.com',
  projectId: 'journal-app-383b1',
  storageBucket: 'journal-app-383b1.appspot.com',
  messagingSenderId: '271283818020',
  appId: '1:271283818020:web:f7a7850f6a697962bdd2b1',
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
