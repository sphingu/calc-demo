import React from 'react'
import PropTypes from 'prop-types'

import OperatorButton from './OperatorButton'
import DigitButton from './DigitButton'

const CalcButtons = ({ buttons, onOperatorClick, onDigitClick }) => {
  return (
    <div>
      {buttons.map(({ operator, label }, i) => {
        return operator ? (
          <OperatorButton
            key={i}
            label={label}
            operator={operator}
            onClick={() => {
              onOperatorClick(operator, label)
            }}
          />
        ) : (
          <DigitButton
            key={i}
            label={label}
            onClick={() => {
              onDigitClick(label)
            }}
          />
        )
      })}
    </div>
  )
}

CalcButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      operation: PropTypes.string
    })
  ).isRequired,
  onOperatorClick: PropTypes.func.isRequired,
  onDigitClick: PropTypes.func.isRequired
}

export default CalcButtons
