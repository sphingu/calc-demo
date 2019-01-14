import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './ButtonComponent'

const Enhance = ButtonComponent => {
  return class extends Component {
    render() {
      const { operator, ...otherProps } = this.props
      return (
        <ButtonComponent
          {...otherProps}
          buttonStyle={{
            backgroundColor: operator === 'EVALUATE' ? 'lightgreen' : '#e6e6e6'
          }}
        />
      )
    }
  }
}
const OperatorButton = Enhance(Button)

OperatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default OperatorButton
