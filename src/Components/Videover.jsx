import React from 'react'
import videoo from './video/astro1.webm'

const Videover = () => {
  return (
    <video loop autoPlay muted className='videoo'>
      <source src={videoo} type="video/mp4" />
    </video>
  )
}

export default Videover