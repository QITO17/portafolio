import React from 'react'
import videoo from './video/astro.mp4'

const Videover = () => {
  return (
    <video loop autoPlay muted className='videoo'>
      <source src={videoo} type="video/mp4" />
    </video>
  )
}

export default Videover