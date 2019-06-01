import React, { Component } from 'react'
import axios from 'axios'

export default class Protected extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  submit() {
    const jwt = localStorage.getItem('cool-jwt')
    if (!jwt) {
      this.props.history.push('/Login')
    }
    axios.get('api/user/', {
      headers: {
        'auth-token': jwt
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        <button onClick={this.submit}>
          hello
        </button>
      </div>
    )
  }
}

