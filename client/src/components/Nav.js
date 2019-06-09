import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'
import Register from './Register'
import Login from './Login';
import { connect } from 'react-redux';


class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginIsOn: false,
      registerIsOn: false
    }
  }

  registerSwitch = e => {
    if (this.state.loginIsOn)
      this.setState({
        loginIsOn: !this.state.loginIsOn
      })
    else
      this.setState({
        loginIsOn: !this.state.loginIsOn,
        registerIsOn: false
      })
  }

  loginSwitch = e => {
    if (this.state.registerIsOn)
      this.setState({
        registerIsOn: !this.state.registerIsOn
      })
    else
      this.setState({
        registerIsOn: !this.state.registerIsOn,
        loginIsOn: false
      })
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
            <div className="nav-search">
              <FontAwesomeIcon icon={faSearch} color="#808080" />
            </div>
            <div className="nav-btn-register-container">
              <div className="nav-btn-register" onClick={e => this.registerSwitch(e)}>
                Регистрация
              </div>
              {/* <Register /> */}
            </div>
            <div className="nav-btn-login-container" onClick={e => this.loginSwitch(e)}>
              <div className="nav-btn-login">
                Войти
              </div>
              {/* this.state.loginIsOn ? <Login /> : ''*/}
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default connect(null, null)(Nav)