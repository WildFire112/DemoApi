import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      idName: '',
      status: ''
    }
  }

  componentDidMount() {
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
        this.setState({
          name: res.data.name,
          idName: res.data.idName,
          status: res.data.status
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.idName}</h3>
        <h4>{this.state.status}</h4>
      </div>
    )
  }
}

