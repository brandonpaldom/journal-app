import PropTypes from 'prop-types'

import { useState } from 'react'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { Navbar, Sidebar } from '../components'

const drawerWidth = 240

const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node,
}

export default JournalLayout
