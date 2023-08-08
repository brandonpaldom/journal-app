import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'

import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    )
    const { photoURL, uid } = result.user
    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    })
    return {
      status: 'success',
      data: {
        displayName,
        email,
        photoURL,
        uid,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      data: error,
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    )
    const { displayName, photoURL, uid } = result.user
    return {
      status: 'success',
      data: {
        displayName,
        email,
        photoURL,
        uid,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      data: error,
    }
  }
}

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user
    return {
      status: 'success',
      data: {
        displayName,
        email,
        photoURL,
        uid,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      data: error,
    }
  }
}

export const logoutFromFirebase = async () => {
  try {
    await firebaseAuth.signOut()
    return {
      status: 'success',
      data: null,
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      data: error,
    }
  }
}
