import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'

import { login, logout } from '../features/auth/authSlice'
import { firebaseAuth } from '../firebase/config'
import { startLoadingNotes } from '../features/journal/thunks'

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout())
      }
      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
      dispatch(startLoadingNotes())
    })
  }, [dispatch])

  return { status }
}
