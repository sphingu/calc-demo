import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DOT, EVALUATE } from '../ActionTypes'
import { operatorClick, digitClick, evaluateClick } from '../Actions'

import CalcButtons from '../components/CalcButtons'

class CalcButtonsContainer extends Component {
  constructor() {
    super()
    this.onOperatorClick = this.onOperatorClick.bind(this)
  }

  onOperatorClick(operator, value) {
    if (operator === EVALUATE) {
      this.props.onEvaluateClick(true)
    } else {
      if (this.props.secondDigit && operator !== DOT) {
        this.props.onEvaluateClick()
      }
      this.props.onOperatorClick(operator, value)
    }
  }

  render() {
    const { buttons, onDigitClick, onEvaluateClick } = this.props

    return (
      <CalcButtons
        buttons={buttons}
        onEvaluateClick={onEvaluateClick}
        onDigitClick={onDigitClick}
        onOperatorClick={this.onOperatorClick}
      />
    )
  }
}

const mapStateToProps = state => ({
  buttons: state.buttons,
  secondDigit: state.secondDigit
})

const mapDispatchToProps = dispatch => ({
  onDigitClick: value => dispatch(digitClick(value)),
  onOperatorClick: (operator, value) =>
    dispatch(operatorClick(operator, value)),
  onEvaluateClick: isClearFirstDigit =>
    dispatch(evaluateClick(isClearFirstDigit))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalcButtonsContainer)
