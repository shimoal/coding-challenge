import { ADD_LINK, ADD_LINKS, DELETE_LINK, EDIT_LINK } from './actions'

const initialState = []

export const links = (state = initialState, { type, link, links, linkId }) => {
  const newState = [ ...state ]
  let i;
  switch (type) {
    case ADD_LINK:
      return [ ...newState, link ]
    case ADD_LINKS:
      return links
    case DELETE_LINK:
      i = newState.findIndex(({ id }) => id === linkId )
      newState.splice(i, 1)
      return newState
    case EDIT_LINK:
      i = newState.findIndex(({ id }) => id === link.id )
      newState[i] = link
      return newState
    default:
      return state
  }
}
