import { ADD_LINK, ADD_LINKS, DELETE_LINK, EDIT_LINK, CLICK_LINK } from './actions'
import uniqid from 'uniqid'

const initialState = []

export const links = (state = initialState, { type, link, links, linkId, linkName, newLinkName }) => {
  const newState = [ ...state ]
  const i = state.findIndex(({ id }) => id === linkId )
  switch (type) {
    case ADD_LINK:
      return [ ...state, link ]
    case ADD_LINKS:
      return links
    case DELETE_LINK:
      newState.splice(i, 1)
      return newState
    case EDIT_LINK:
      newState[i].linkName = newLinkName
      link.linkName = newLinkName
      newState[i] = link
      return newState
    case CLICK_LINK:
      link.clicked = link.clicked + 1
      newState[i] = link
      return newState
    default:
      return state
  }
}
