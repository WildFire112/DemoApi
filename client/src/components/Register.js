import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      name: '',
      idName: '',
      errors: [],
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
    axios.post('/api/auth/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      idName: this.state.idName
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={this.state.isOn ? "register-wrap":"register-wrap-none"}>
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
              <label className="auth-label">ID name</label>
              <input
                type="text"
                name="idName"
                onChange={e => this.change(e)}
                value={this.state.idName}
                className="auth-input"
                placeholder="Type your ID name"
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
                placeholder="Type your password"
              />
            </div>
            <input type="submit" value="Register" className="submit-btn" />
          </form>
        </div>
      </div>
    )
  }
}