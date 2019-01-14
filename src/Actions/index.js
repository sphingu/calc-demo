import * as t from '../ActionTypes'

export const operatorClick = (operator, value) => ({
  type: operator,
  value
})

export const digitClick = value => ({
  type: t.DIGIT_CLICK,
  value
})

export const evaluateClick = isClearFirstDigit => ({
  type: t.EVALUATE,
  isClearFirstDigit
})

export const closeNotification = () => ({
  type: t.CLOSE_NOTIFICATION
})
