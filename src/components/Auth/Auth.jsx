import React, { Component } from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
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
          placeholder="E-mail"
          spellCheck={false}
          className="input"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          value={this.state.password}
          onChange={this.onChange}
        />
        <div className="sign-btn" onClick={this.postUser}>SIGN IN</div>
      </div>
    )
  }
}
