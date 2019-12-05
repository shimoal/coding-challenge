/* Action types */
export const ADD_LINK = 'ADD_LINK'
export const DELETE_LINK = 'DELETE_LINK'
export const EDIT_LINK = 'EDIT_LINK'

/* Action creators */
export const addLink = linkName => {
  return { type: ADD_LINK, linkName }
}

export const deleteLink = linkId => {
  return { type: DELETE_LINK, linkId }
}

export const editLink = (linkId, newLinkName) => {
  return { type: EDIT_LINK, linkId, newLinkName }
}
