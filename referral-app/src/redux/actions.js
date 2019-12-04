/* Action types */
export const ADD_LINK = 'ADD_LINK'

/* Action creators */
export const addLink = linkName => {
  return { type: ADD_LINK, linkName}
}
