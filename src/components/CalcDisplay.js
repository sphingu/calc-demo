import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'

const CalcDisplay = ({ firstDigit, operator, secondDigit }) => {
  const fontSize =
    35 -
    0.75 *
      ((!firstDigit || firstDigit.length) +
        (!secondDigit || secondDigit.length))

  return (
    <Paper className="output" zDepth={1}>
      <label style={{ fontSize: fontSize < 17 ? 17 : fontSize }}>
        {firstDigit}
        {operator && operator.value}
        {secondDigit}
      </label>
    </Paper>
  )
}

CalcDisplay.propTypes = {
  firstDigit: PropTypes.string,
  secondDigit: PropTypes.string,
  operator: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
}

export default CalcDisplay
