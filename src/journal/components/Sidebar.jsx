import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'

export default function Sidebar({ drawerWidth }) {
  return (
    <Drawer
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: 'block' },
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {['January', 'February', 'March'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNotIcon />
              </ListItemIcon>
              <Stack>
                <ListItemText primary={text} />
                <ListItemText
                  secondary={'The quick brown fox jumps over the lazy dog.'}
                />
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
