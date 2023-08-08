import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'

import { SidebarItem } from './'

export const Sidebar = ({
  window,
  drawerWidth,
  mobileOpen,
  onDrawerToggle,
}) => {
  const { notes } = useSelector((state) => state.journal)

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {notes.map((note) => (
          <SidebarItem key={note.id} note={note} imagesUrl={note.imagesUrl} />
        ))}
      </List>
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  window: PropTypes.func,
  drawerWidth: PropTypes.number,
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
}
