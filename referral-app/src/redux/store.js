import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { links } from './reducers'

const reducer = combineReducers({
  links
})

export default createStore(reducer, applyMiddleware(thunk))
