import React, { Component } from 'react'
import axios from 'axios'
import bg from '../Слой-600-копия.png'

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
      <>
        <div className="bg-container">
          <img src={bg} alt="" className="bg-img" />
        </div>
        
        <div class="infobar-container">
          <div class="infobar">
            <div className="infobar-left">
              <div className="infobar-number">
                238 постов
            </div>
              <div className="infobar-number">
                389 522 подписчика
            </div>
            </div>
            <div className="follow-btn">
              Подписаться
          </div>
          </div>
        </div>

        <div className="main-container">
          <div className="left-sidebar">
            <h2>{this.state.name}</h2>
            <h3>{this.state.idName}</h3>
            <h4>{this.state.status}</h4>
          </div>
          <div className="stream-container">

          </div>
        </div>
      </>
    )
  }
}

