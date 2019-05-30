import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/Login" className="nav-btn">
        Login
      </Link> <br />
      <Link to="/Register" className="nav-btn">
        Register
      </Link> <br />
    </div>
  )
}

export default Nav
