/* Action types */
export const ADD_LINK = 'ADD_LINK'
export const DELETE_LINK = 'DELETE_LINK'

/* Action creators */
export const addLink = linkName => {
  return { type: ADD_LINK, linkName }
}

export const deleteLink = linkName => {
  return { type: DELETE_LINK, linkName }
}
