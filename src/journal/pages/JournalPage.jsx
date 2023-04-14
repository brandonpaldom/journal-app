import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import JournalLayout from '../layout/JournalLayout'
import NoteView from '../views/NoteView'
import NothingSelectedView from '../views/NothingSelectedView'

export default function JournalPage() {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <Fab
        color="secondary"
        size="medium"
        sx={{ position: 'fixed', right: 32, bottom: 32 }}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </JournalLayout>
  )
}
