/* Action types */
export const ADD_LINK = 'ADD_LINK'

/* Action creators */
export const addLink = linkName => (
  { type: ADD_LINK, linkName}
)
