import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCxJjVk2hQffdtvhv0xnUzKTKQFrYvc9xw',
  authDomain: 'journal-app-1d0bc.firebaseapp.com',
  projectId: 'journal-app-1d0bc',
  storageBucket: 'journal-app-1d0bc.appspot.com',
  messagingSenderId: '397821144189',
  appId: '1:397821144189:web:ab5a14838555ecba01d514',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
