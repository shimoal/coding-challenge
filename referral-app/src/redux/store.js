import { createStore, combineReducers } from 'redux'
import { links } from './reducers'

const reducer = combineReducers({
  links
})

export default createStore(reducer)
