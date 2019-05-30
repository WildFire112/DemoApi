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
      <div>
        <h3>
          Register
        </h3>
        <form onSubmit={e => this.submit(e)}>
          <label>Name</label>
          <input type="text" name="name" onChange={e => this.change(e)} value={this.state.name} /><br />

          <label>E-mail</label>
          <input type="email" name="email" onChange={e => this.change(e)} value={this.state.email} /><br />

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.change(e)} value={this.state.value} />

          <input type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}