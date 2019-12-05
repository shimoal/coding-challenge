/* Action types */
export const ADD_LINK = 'ADD_LINK'
export const DELETE_LINK = 'DELETE_LINK'
export const EDIT_LINK = 'EDIT_LINK'

/* Action creators */
export const addLink = linkName => {
  return { type: ADD_LINK, linkName }
}

export const deleteLink = linkName => {
  return { type: DELETE_LINK, linkName }
}

export const editLink = (linkName, newLinkName) => {
  return { type: EDIT_LINK, linkName, newLinkName }
}
