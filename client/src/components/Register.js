import React, { Component } from 'react'
import {connect} from 'react-redux'

import { registerNewUser } from '../store/user/actions';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      idName: '',
      email: '',
      password: '',
      repeatPassword: '',
      errors: this.props.errors
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onIdNameChange = e => {
    // eslint-disable-next-line
    const value = '@' + e.target.value.trim().replace(/[^\w\.]/gi, '')
    this.setState({idName: value === '@' ? '' : value})
  }

  onSubmit = e => {
    const userData = {
      name: this.state.name,
      idName: this.state.idName,
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword
    }
    this.props.registerNewUser(userData)
  }

  render() {
    return (
      <div className="sign-block">
      <input
        type="email"
        name="email"
        placeholder="e-mail"
        className="input"
        value={this.state.email}
        onChange={this.onChange}
      />
      <input
        type="text"
        name="name"
        placeholder="имя"
        className="input"
        value={this.state.name}
        onChange={this.onChange}
      />
      <input
        type="text"
        name="idName"
        placeholder="id"
        className="input"
        value={this.state.idName}
        onChange={this.onIdNameChange}
      />
      <input
        type="password"
        name="password"
        placeholder="пароль"
        className="input"
        value={this.state.password}
        onChange={this.onChange}
      />
      <input
        type="password"
        name="repeatPassword"
        placeholder="повторите пароль"
        className="input"
        value={this.state.repeatPassword}
        onChange={this.onChange}
      />
      <div className="sign-btn" onClick={this.onSubmit}>SIGN UP</div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.registrationErrors
  }
}

const mapDispatchToProps = {
  registerNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
