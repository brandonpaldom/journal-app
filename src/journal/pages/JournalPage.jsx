import { useDispatch, useSelector } from 'react-redux'

import Fab from '@mui/material/Fab'

import AddIcon from '@mui/icons-material/Add'

import JournalLayout from '../layout/JournalLayout'
import { Noteview, NothingSelectedView } from '../views'
import { startNewNote } from '../../features/journal/thunks'

export const JournalPage = () => {
  const { active, isSaving } = useSelector((state) => state.journal)
  const dispatch = useDispatch()

  const handleAddNew = () => {
    dispatch(startNewNote())
  }

  let content
  if (active) {
    content = <Noteview />
  } else {
    content = <NothingSelectedView />
  }

  return (
    <JournalLayout>
      {content}
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: '24px', right: '24px' }}
        onClick={handleAddNew}
        disabled={isSaving}
      >
        <AddIcon />
      </Fab>
    </JournalLayout>
  )
}
