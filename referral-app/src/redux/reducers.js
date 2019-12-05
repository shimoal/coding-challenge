import { ADD_LINK, DELETE_LINK } from './actions'

const initialState = []

export const linkNames = (state = initialState, { type, linkName }) => {
  switch (type) {
    case ADD_LINK:
      return [ ...state, linkName ]
    case DELETE_LINK:
      const i = state.indexOf(linkName)
      const newState = [ ...state ]
      newState.splice(i, 1)
      return newState
    default:
      return state
  }
}
