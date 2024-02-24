import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/doctor">Doctor Details</Link>
      <Link to="/patient">Patient Registration</Link>
    </div>
  )
}
