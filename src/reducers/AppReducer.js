import * as t from '../ActionTypes'

const initialState = {
  firstDigit: '0',
  secondDigit: null,
  operator: null,
  clearFirstDigit: false,
  isShowNotification: false,
  buttons: [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '/', operator: t.DIVIDE },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '-', operator: t.MINUS },
    { label: '7' },
    { label: '8' },
    { label: '9' },
    { label: '+', operator: t.PLUS },
    { label: '0' },
    { label: '.', operator: t.DOT },
    { label: '*', operator: t.MULTIPLY },
    { label: '=', operator: t.EVALUATE },
    { label: 'CLEAR', operator: t.CLEAR }
  ]
}
export default (state = initialState, action) => {
  const { value } = action
  switch (action.type) {
    case t.DIGIT_CLICK:
      // if operator selected then append Digit in secondDigit else firstDigit variable
      if (state.operator) {
        return Object.assign({}, state, {
          secondDigit:
            state.secondDigit === '0'
              ? value
              : (state.secondDigit || '') + value
        })
      } else {
        return Object.assign({}, state, {
          firstDigit:
            state.isClearFirstDigit || state.firstDigit === '0'
              ? value
              : (state.firstDigit || '') + value,
          isClearFirstDigit: false
        })
      }
    case t.DOT:
      // if operator selected then append Dot(.) in secondDigit else firstDigit variable
      // dot should be entered only once
      if (state.operator) {
        if (!state.secondDigit || state.secondDigit.indexOf('.') === -1) {
          return Object.assign({}, state, {
            secondDigit: (state.secondDigit || '') + action.value
          })
        }
      } else if (!state.firstDigit || state.firstDigit.indexOf('.') === -1) {
        return Object.assign({}, state, {
          firstDigit: (state.firstDigit || '') + action.value
        })
      }
      return state
    case t.DIVIDE:
    case t.MULTIPLY:
    case t.PLUS:
      if (state.firstDigit) {
        return Object.assign({}, state, {
          operator: action
        })
      }
      return state
    case t.MINUS:
      if (!state.firstDigit) {
        return Object.assign({}, state, {
          firstDigit: action.value
        })
      }
      if (!state.operator) {
        return Object.assign({}, state, {
          operator: action
        })
      }
      if (!state.secondDigit) {
        return Object.assign({}, state, {
          secondDigit: action.value
        })
      }
      return state

    case t.EVALUATE:
      if (state.operator && state.secondDigit) {
        var result = 0
        switch (state.operator.type) {
          case t.PLUS:
            result =
              parseFloat(state.firstDigit) + parseFloat(state.secondDigit)
            break
          case t.MINUS:
            result =
              parseFloat(state.firstDigit) - parseFloat(state.secondDigit)
            break
          case t.MULTIPLY:
            result =
              parseFloat(state.firstDigit) * parseFloat(state.secondDigit)
            break
          case t.DIVIDE:
            result =
              parseFloat(state.firstDigit) / parseFloat(state.secondDigit)
            break
          default:
            break
        }
        return Object.assign({}, state, {
          firstDigit: result.toString(),
          isShowNotification: isNaN(result) || result === Infinity,
          operator: null,
          secondDigit: null,
          isClearFirstDigit: action.isClearFirstDigit
        })
      }

      // clear operator if second digit not entered
      if (!state.secondDigit) {
        return Object.assign({}, state, {
          operator: null,
          isClearFirstDigit: action.isClearFirstDigit
        })
      }
      return state

    case t.CLOSE_NOTIFICATION:
    case t.CLEAR:
      return Object.assign({}, state, {
        isShowNotification: false,
        firstDigit: '0',
        operator: null,
        secondDigit: null
      })

    default:
      return state
  }
}
