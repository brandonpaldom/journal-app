import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const AuthLayout = ({ title, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        px: 2,
        py: 16,
        height: '100dvh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          p: 3,
          borderRadius: 2,
          width: '100%',
          maxWidth: '440px',
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="700">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  )
}

export default AuthLayout

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
