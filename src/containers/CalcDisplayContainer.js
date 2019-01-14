import React, { Component } from 'react'
import { connect } from 'react-redux'

import CalcDisplay from '../components/CalcDisplay'

class CalcDisplayContainer extends Component {
  render() {
    const { firstDigit, secondDigit, operator } = this.props

    return (
      <CalcDisplay
        firstDigit={firstDigit}
        secondDigit={secondDigit}
        operator={operator}
      />
    )
  }
}

const mapStateToProps = state => ({
  firstDigit: state.firstDigit,
  secondDigit: state.secondDigit,
  operator: state.operator
})

export default connect(mapStateToProps)(CalcDisplayContainer)
