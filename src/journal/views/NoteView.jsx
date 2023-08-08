import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import FileUploadIcon from '@mui/icons-material/FileUpload'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'

import { setActiveNoteAction } from '../../features/journal/journalSlice'
import {
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '../../features/journal/thunks'
import { useForm, useSnackbar } from '../../hooks'
import { Alert, Gallery } from '../components'

export const Noteview = () => {
  const dispatch = useDispatch()
  const { active: note, isSaving } = useSelector((state) => state.journal)
  const { body, title, date, handleInputChange, formState } = useForm(note)
  const { open, message, handleClose, showSnackbar } = useSnackbar()

  const dateFormatted = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [date])

  const fileInput = useRef(null)

  useEffect(() => {
    dispatch(setActiveNoteAction(formState))
  }, [formState])

  const handleSave = () => {
    dispatch(startSaveNote())
    showSnackbar('Note saved successfully')
  }

  const handleFile = (e) => {
    const files = e.target.files
    if (files.length === 0) return
    console.log(files)
    dispatch(startUploadingFiles(files))
  }

  const handleDelete = () => {
    dispatch(startDeletingNote(note.id))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1">
        {dateFormatted}
      </Typography>
      <Stack spacing={2}>
        <TextField
          type="text"
          label="Title"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          label="Message"
          multiline
          minRows={4}
          name="body"
          value={body}
          onChange={handleInputChange}
        />
        <IconButton
          color="primary"
          sx={{ alignSelf: 'start' }}
          disabled={isSaving}
          onClick={() => fileInput.current.click()}
        >
          <FileUploadIcon />
        </IconButton>
        <input
          ref={fileInput}
          type="file"
          multiple
          onChange={handleFile}
          style={{ display: 'none' }}
        />
      </Stack>
      <Gallery images={note.imagesUrl} />
      <Alert open={open} message={message} handleClose={handleClose} />
      <Stack direction="row" spacing={2} sx={{ mt: 2, alignSelf: 'end' }}>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{ alignSelf: 'end' }}
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          sx={{ alignSelf: 'end' }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Stack>
    </Box>
  )
}
