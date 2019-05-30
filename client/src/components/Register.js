import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      name: ''
    }

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    axios.post('/api/user/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(JSON.stringify(res))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="wrap-auth">
        <form onSubmit={e => this.submit(e)} className="auth-form">
          <h2 className="auth-title">
            Register
          </h2>
          <div className="wrap-input">
            <label className="auth-label">Name</label>
            <input
              type="text"
              name="name"
              onChange={e => this.change(e)}
              value={this.state.name}
              className="auth-input"
              placeholder="Type your name"
            />
          </div>
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
              placeholder="type your password"
            />
          </div>
          <input type="submit" value="Register" className="submit-btn" />
        </form>
      </div>
    )
  }
}