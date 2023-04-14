import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import StarIcon from '@mui/icons-material/Star'

export default function NothingSelectedView() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 112px)',
        border: '1px dashed #1976d2',
        borderRadius: 2,
        backgroundColor: 'rgba(66, 165, 245, 0.1)',
      }}
    >
      <Stack direction="column" spacing={2} alignItems="center">
        <StarIcon sx={{ color: '#1976d2' }} />
        <Typography color="primary">
          Select something or create an entry!
        </Typography>
      </Stack>
    </Box>
  )
}
