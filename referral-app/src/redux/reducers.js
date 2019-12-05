import { ADD_LINK, DELETE_LINK, EDIT_LINK } from './actions'
import uniqid from 'uniqid'

const initialState = []

export const links = (state = initialState, { type, linkId, linkName, newLinkName }) => {
  const newState = [ ...state ]
  const i = state.findIndex(({ id }) => id === linkId )
  switch (type) {
    case ADD_LINK:
      const newLink = { id: uniqid(), linkName, clicked: 0 }
      return [ ...state, newLink ]
    case DELETE_LINK:
      newState.splice(i, 1)
      return newState
    case EDIT_LINK:
      newState[i].linkName = newLinkName
      return newState
    default:
      return state
  }
}
