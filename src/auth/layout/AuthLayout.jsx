import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AuthLayout({ title, children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pl: { xs: 4, sm: 0 },
        pr: { xs: 4, sm: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 4,
          borderRadius: 4,
          width: { xs: '100%', sm: '480px' },
          mt: { xs: 4, sm: 12 },
        }}
        className="shadow-lg"
      >
        <Typography variant="h6">{title}</Typography>
        {children}
      </Box>
    </Box>
  )
}
