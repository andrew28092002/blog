import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h1>Sorry</h1>
        <p>this page not found</p>
        <Link to='/'>Homepage</Link>
    </div>
  )
}

export default NotFound