import { ADD_LINK } from './actions'

const initialState = []

export const linkNames = (state = initialState, { type, linkName }) => (
  type === ADD_LINK ? [ ...state, linkName ] : state
)
