import PropTypes from 'prop-types'

import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'

import CloseIcon from '@mui/icons-material/Close'

export const Alert = ({ open, message, handleClose }) => {
  const action = (
    <IconButton size="small" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  )

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  )
}

Alert.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  handleClose: PropTypes.func,
}
