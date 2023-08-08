import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  registerUserWithEmailAndPassword,
  logoutFromFirebase,
} from '../../firebase/providers'
import { clearNotesLogoutAction } from '../journal/journalSlice'
import { checkAuth, login, logout } from './authSlice'

export const checkingAuth = () => {
  return async (dispatch) => {
    dispatch(checkAuth())
  }
}

export const startRegisterUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkAuth())
    const {
      status,
      data: { photoURL, uid, message },
    } = await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    })
    if (status === 'error') {
      return dispatch(logout(message))
    }
    dispatch(login({ displayName, email, photoURL, uid }))
  }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkAuth())
    const {
      status,
      data: { displayName, photoURL, uid, message },
    } = await loginWithEmailAndPassword({ email, password })
    if (status === 'error') {
      return dispatch(logout(message))
    }
    dispatch(login({ displayName, email, photoURL, uid }))
  }
}

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(checkAuth())
    const result = await loginWithGoogle()
    if (result.status === 'error') {
      return dispatch(logout(result.data.message))
    }
    dispatch(login(result.data))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFromFirebase()
    dispatch(clearNotesLogoutAction())
    dispatch(logout())
  }
}
