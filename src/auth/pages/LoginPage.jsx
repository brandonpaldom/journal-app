import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../layout/AuthLayout'

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <form>
        <Stack spacing={2}>
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<GoogleIcon />}
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
