import { ADD_LINK, DELETE_LINK, EDIT_LINK } from './actions'

const initialState = []

export const linkNames = (state = initialState, { type, linkName, newLinkName }) => {
  const newState = [ ...state ]
  const i = state.indexOf(linkName)
  switch (type) {
    case ADD_LINK:
      return [ ...state, linkName ]
    case DELETE_LINK:
      newState.splice(i, 1)
      return newState
    case EDIT_LINK:
      newState[i] = newLinkName
      return newState
    default:
      return state
  }
}
