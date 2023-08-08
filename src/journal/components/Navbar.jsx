import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import LogoutIcon from '@mui/icons-material/Logout'

import { startLogout } from '../../features/auth/thunks'
import { ProfilePhoto } from './'

export const Navbar = ({ drawerWidth, onDrawerToggle }) => {
  const dispatch = useDispatch()
  const { photoURL } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          JournalApp
        </Typography>
        <ProfilePhoto photoURL={photoURL} />
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  drawerWidth: PropTypes.number,
  onDrawerToggle: PropTypes.func,
}
