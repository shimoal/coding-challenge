import { createStore, combineReducers } from 'redux'
import { linkNames } from './reducers'

const reducer = combineReducers({
  linkNames
})

export default createStore(reducer)
