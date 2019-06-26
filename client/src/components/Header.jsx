import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendHeaderImage } from '../store/user/actions';
import header from '../Слой-600-копия.png'

class Header extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(selectorFiles) {
    this.props.sendHeaderImage(selectorFiles)
  }

  render() {
    return (
      <div className="header-container">
        <img src={this.props.src !== undefined || this.props.src !== '' ? this.props.src : header} alt="header" />
        <input type="file" name="header" accept="image/*" onChange={e => this.handleChange(e.target.files)} />
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
