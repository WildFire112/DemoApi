import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendHeaderImage } from '../store/user/actions';
import header from '../bg.png'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img src={header} alt="header" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  sendHeaderImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
