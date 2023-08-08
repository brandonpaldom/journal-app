import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { startRegisterUserWithEmailAndPassword } from '../../features/auth/thunks'
import { useForm } from '../../hooks'
import AuthLayout from '../layout/AuthLayout'

const formValidations = {
  email: [(v) => v.includes('@'), 'Email must be valid'],
  password: [(v) => v.length >= 6, 'Password must be at least 6 characters'],
  displayName: [(v) => v.length > 0, 'Full name is required'],
}

const formInitialValues = {
  email: '',
  password: '',
  displayName: '',
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector((state) => state.auth)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {
    displayName,
    email,
    password,
    handleInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formInitialValues, formValidations)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(
      startRegisterUserWithEmailAndPassword({ email, password, displayName }),
    )
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            type="text"
            label="Full name"
            name="displayName"
            value={displayName}
            onChange={handleInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          />
          <TextField
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isAuthenticating}
          >
            Register
          </Button>
          <Typography>
            Already have an account?{' '}
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Typography>
        </Stack>
      </form>
    </AuthLayout>
  )
}
