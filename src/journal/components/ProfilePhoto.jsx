import PropTypes from 'prop-types'

import Avatar from '@mui/material/Avatar'

import PersonIcon from '@mui/icons-material/Person'

export const ProfilePhoto = ({ photoURL }) => {
  return (
    <>
      {photoURL ? (
        <Avatar alt="profile photo" src={photoURL} />
      ) : (
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <PersonIcon />
        </Avatar>
      )}
    </>
  )
}

ProfilePhoto.propTypes = {
  photoURL: PropTypes.string,
}
