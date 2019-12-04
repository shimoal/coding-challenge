import { ADD_LINK } from './actions'

const initialState = {
  linkNames: []
}

export const linkNames = (state = initialState, { type, linkName }) => (
  type === ADD_LINK
    ? { ...state, linkNames: [ ...state.linkNames, linkName ]}
    : state
)
