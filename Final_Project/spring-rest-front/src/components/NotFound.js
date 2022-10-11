import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
            <p className='h1'>The page you are looking is not yet developed.</p>
            <p className='h1'><Link to='/students'>CLICK HERE.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default NotFound