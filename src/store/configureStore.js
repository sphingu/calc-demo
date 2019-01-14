import { createStore } from 'redux'
import AppReducer from '../reducers/AppReducer'

export default () => {
  return createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
