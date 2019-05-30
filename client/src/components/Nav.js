import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Nav = () => {
  return (
    <Router>
      <Link to="/Login">
        Login
      </Link>
      <Link to="/Register">
        Register
      </Link>
    </Router>
  )
}

export default Nav
