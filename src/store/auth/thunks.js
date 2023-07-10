import { signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export function checkingAuthentication(email, password) {
  return async function (dispatch) {
    dispatch(checkingCredentials())
  }
}

export function checkingAuthenticationWithGoogle() {
  return async function (dispatch) {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()

    if (!result.ok) {
      return dispatch(logout(result.errorMessage))
    }

    dispatch(login(result))
  }
}
