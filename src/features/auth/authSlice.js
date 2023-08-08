import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { uid, email, displayName, photoURL } = payload
      state.status = 'authenticated'
      state.uid = uid
      state.email = email
      state.displayName = displayName
      state.photoURL = photoURL
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload
    },
    checkAuth: (state) => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkAuth } = authSlice.actions

export default authSlice.reducer
