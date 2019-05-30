import React, { Component } from 'react'
import Axios from 'axios';
import { withRouter} from 'react-router-dom'

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('cool-jwt')
    if (!jwt) {
      this.props.history.push('/Login')
    }

    Axios.get('/api/posts/', {
      headers: {
        'auth-token': jwt
      }
    })
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        localStorage.removeItem('cool-jwt')
        this.props.history.push('/Login')
      })
  }

  render() {
    if(this.state.user === undefined){
      return(
        <div>
          <h1>
            Loading...
          </h1>
        </div>
      )
    }
    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export default withRouter(AuthenticatedComponent)
