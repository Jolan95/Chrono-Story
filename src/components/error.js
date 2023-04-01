import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
    <div className='text-center'>
    <div><img className='img-error' src={`${process.env.REACT_APP_URL}/assets/broken.png`} alt="erreur" ></img></div>
    </div>
    <div className='text-center'>Quelque chose semble s'être mal passé !</div>
    </>
  )
}
