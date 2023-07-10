import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../layout/AuthLayout'
import { useFormControl } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkingAuthentication,
  checkingAuthenticationWithGoogle,
} from '../../store/auth/thunks'
import { useMemo } from 'react'

export default function LoginPage() {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  const { email, password, handleInputChange } = useFormControl({
    email: 'brandon@mail.com',
    password: '123456',
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    dispatch(checkingAuthentication())
  }

  const handleGoogleLogin = () => {
    console.log('Google Login')
    dispatch(checkingAuthenticationWithGoogle())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={isAuthenticating}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={isAuthenticating}
          >
            Login with Google
          </Button>
        </Stack>
      </form>
      <Typography>
        Don't have an account?{' '}
        <Link component={RouterLink} to="/auth/register">
          Register
        </Link>
      </Typography>
    </AuthLayout>
  )
}
