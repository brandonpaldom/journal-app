import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../layout/AuthLayout'
import { useFormControl } from '../../hooks/useForm'

const formData = {
  email: 'brandon@mail.com',
  password: '123456',
  displayName: 'Brandon',
}

const formValidations = {
  email: [(v) => v.includes('@'), 'Invalid email'],
  password: [(v) => v.length > 5, 'Password must be longer than 5 characters'],
  displayName: [(v) => v.length > 3, 'Name must be longer than 3 characters'],
}

export default function RegisterPage() {
  const {
    formValues,
    displayName,
    email,
    password,
    handleInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useFormControl(formData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues, formValidations)
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={handleInputChange}
          />
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
          <Button variant="contained" color="primary" fullWidth type="submit">
            Register
          </Button>
        </Stack>
      </form>
      <Typography>
        Already have an account?{' '}
        <Link component={RouterLink} to="/auth/login">
          Login
        </Link>
      </Typography>
    </AuthLayout>
  )
}
