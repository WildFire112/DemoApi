import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'
import Login from './Login'
import Register from './Register';


export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginIsOn: false,
      registerIsOn: false
    }

    this.registerSwitch = this.registerSwitch.bind(this)
    this.loginSwitch = this.loginSwitch.bind(this)
    this.registerElement = React.createRef()
    this.loginElement = React.createRef()
  }

  registerSwitch(e) {
    this.registerElement.current.switch()
  }

  loginSwitch(e) {
    this.loginElement.current.switch()
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="nav-logo-container">
            <Link to="/" className="nav-logo">
              Postter
          </Link>
          </div>
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
              <FontAwesomeIcon icon={faSearch} color="#808080" />
            </Link>
            <div className="nav-btn-register-container">
              <div className="nav-btn-register" onClick={e => this.registerSwitch(e)}>
                Регистрация
            </div>
              <Register ref={this.registerElement} />
            </div>
            <div className="nav-btn-login-container" onClick={e => this.loginSwitch(e)}>
              <div className="nav-btn-login">
                Войти
            </div>
              <Login ref={this.loginElement} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}


