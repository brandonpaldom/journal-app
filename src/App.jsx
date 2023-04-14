import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import lightTheme from './themes/lightTheme'
import darkTheme from './themes/darkTheme'

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
    </ThemeProvider>
  )
}
