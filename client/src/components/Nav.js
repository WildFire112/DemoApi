import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <Link to="/" className="nav-logo">
          Postter
        </Link>
        <div className="nav-center">
          {/* TODO: change links */}
          <Link to="/" className="nav-center-btn">
            Главная
          </Link>
          <Link to="/" className="nav-center-btn">
            Мой блог
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-search">
            <FontAwesomeIcon icon={faSearch} color="#484848" />
          </Link>
          <Link to="/Register" className="nav-btn">
            Регистрация
          </Link>
          <Link to="/Login" className="nav-btn">
            Войти
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Nav
