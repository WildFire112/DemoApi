import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header';

import { getUserByIdName } from '../store/user/actions';


export class Blog extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getUserByIdName('@aliev.hustl')
  }

  render() {
    return (
      <div className="container">
        <Header src={this.props.user.other.header}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  getUserByIdName
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
