import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SaveIcon from '@mui/icons-material/Save'
import Gallery from '../components/Gallery'

export default function NoteView() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>Agoust 31, 2023</Typography>
        <Button variant="contained" startIcon={<SaveIcon />}>
          Save
        </Button>
      </Stack>
      <Stack spacing={2}>
        <TextField label="Title" variant="outlined" fullWidth />
        <TextField
          label="What happened today?"
          fullWidth
          multiline
          minRows={4}
        />
      </Stack>
      <Gallery />
    </Box>
  )
}
