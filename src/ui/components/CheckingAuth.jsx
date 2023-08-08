import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const CheckingAuth = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 16,
        height: '100dvh',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
