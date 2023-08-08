import { useEffect, useState } from 'react'

export const useSnackbar = (initialMessage = '') => {
  const [message, setMessage] = useState(initialMessage)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (message.length > 0) setOpen(true)
  }, [message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const showSnackbar = (newMessage) => {
    setMessage(newMessage)
  }

  return { open, message, handleClose, showSnackbar }
}
