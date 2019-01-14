import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './ButtonComponent'

const Enhance = ButtonComponent => {
  return class extends Component {
    render() {
      return <ButtonComponent {...this.props} />
    }
  }
}

const DigitButton = Enhance(Button)

DigitButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DigitButton
