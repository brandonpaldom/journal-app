import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'

import { setActiveNoteAction } from '../../features/journal/journalSlice'

export const SidebarItem = ({ note, imagesUrl = [] }) => {
  const dispatch = useDispatch()

  const handleSelectNote = () => {
    dispatch(setActiveNoteAction({ ...note, imagesUrl }))
  }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleSelectNote}>
        <Stack>
          <ListItemText primary={note.title} className="line-clamp-1" />
          <ListItemText secondary={note.body} className="line-clamp-2" />
        </Stack>
      </ListItemButton>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  note: PropTypes.object.isRequired,
  imagesUrl: PropTypes.array,
}
