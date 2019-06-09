import React, { Component } from 'react'
import { connect } from 'react-redux';

import { postUser } from '../store/user/actions';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  postUser = e => {
    this.props.postUser(this.state)
  }

  render() {
    return (
      <div className="sign-block">
        <input
          type="text"
          name="email"
          autoComplete="off"
          placeholder="e-mail"
          spellCheck={false}
          className="input"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="пароль"
          className="input"
          value={this.state.password}
          onChange={this.onChange}
        />
        <div className="sign-btn" onClick={this.postUser}>SIGN IN</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.loginErrors
  }
}

const mapDispatchToProps = {
  postUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
