import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isOn: false
    }

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  switch() {
    this.setState({isOn: !this.state.isOn})
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    axios.post('api/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data)
        console.log(JSON.stringify(res.data));

        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={this.state.isOn ? "login-wrap":"login-wrap-none"}>
        <div className="wrap-auth">
          <form onSubmit={e => this.submit(e)} className="auth-form">
            <h2 className="auth-title">
              Login
          </h2>
            <div className="wrap-input">
              <label className="auth-label">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={e => this.change(e)}
                value={this.state.email}
                className="auth-input"
                placeholder="Type your e-mail"
              />
            </div>
            <div className='wrap-input'>
              <label className="auth-label">Password</label>
              <input
                type="password"
                name="password"
                onChange={e => this.change(e)}
                value={this.state.password}
                autoComplete="false"
                className="auth-input"
                placeholder="Type your password"
              />
            </div>
            <input type="submit" value="Login" className="submit-btn" />
          </form>
        </div>
      </div>
    )
  }
}
