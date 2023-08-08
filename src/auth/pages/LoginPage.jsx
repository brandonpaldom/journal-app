import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import GoogleIcon from '@mui/icons-material/Google'

import {
  startGoogleLogin,
  startLoginWithEmailAndPassword,
} from '../../features/auth/thunks'
import { useForm } from '../../hooks'
import AuthLayout from '../layout/AuthLayout'

const formInitialState = {
  email: 'client@demo.com',
  password: 'client',
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { email, password, handleInputChange } = useForm(formInitialState)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmailAndPassword({ email, password }))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Alert icon={false} severity="info">
            Client Email: <strong>client@demo.com</strong> / Pass:{' '}
            <strong>client</strong>
          </Alert>
          <TextField
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isAuthenticating}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            onClick={handleGoogleLogin}
            disabled={isAuthenticating}
          >
            Login with Google
          </Button>
          <Typography>
            Don&apos;t have an account?{' '}
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Register
            </Link>
          </Typography>
        </Stack>
      </form>
    </AuthLayout>
  )
}
