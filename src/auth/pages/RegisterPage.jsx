import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../layout/AuthLayout'

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <form>
        <Stack spacing={2}>
          <TextField label="Name" fullWidth />
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
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
