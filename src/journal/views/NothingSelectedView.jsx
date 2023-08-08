import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const NothingSelectedView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100dvh - 112px)',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        borderRadius: 2,
        border: '1px dashed #1976d2',
      }}
    >
      <Typography color="primary">
        Select something or create an entry!
      </Typography>
    </Box>
  )
}
