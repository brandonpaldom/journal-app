import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import lightTheme from './themes/lightTheme'
import darkTheme from './themes/darkTheme'
import Root from './routes/Root'

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  )
}
