import PropTypes from 'prop-types'

import { memo } from 'react'

import Grid from '@mui/material/Grid'

export const Gallery = memo(function Gallery({ images }) {
  return (
    <Grid container spacing={1}>
      {images.map((image) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={image}>
          <img src={image} loading="lazy" style={{ width: '100%' }} />
        </Grid>
      ))}
    </Grid>
  )
})

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}
