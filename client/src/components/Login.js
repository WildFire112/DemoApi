import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
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
    axios.post('api/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data)
        console.log(JSON.stringify(res.data));

        this.props.history.push('/Protected')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h3>
          Login
        </h3>
        <form onSubmit={ e => this.submit(e)}>
          <label>E-mail</label>
          <input type="email" name="email" onChange={e => this.change(e)} value={this.state.email} /><br />

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.change(e)} value={this.state.password} />

          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
