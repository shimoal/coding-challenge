import axios from 'axios'

/* Action types */
export const ADD_LINK = 'ADD_LINK'
export const ADD_LINKS = 'ADD_LINKS'
export const DELETE_LINK = 'DELETE_LINK'
export const EDIT_LINK = 'EDIT_LINK'
export const CLICK_LINK = 'CLICK_LINK'

/* Action creators */
export const addLink = link => {
  return { type: ADD_LINK, link }
}

export const addLinks = links => {
  return { type: ADD_LINKS, links }
}

export const deleteLink = linkId => {
  return { type: DELETE_LINK, linkId }
}

export const editLink = link => {
  return { type: EDIT_LINK, link }
}

export const clickLink = linkId => {
  return { type: CLICK_LINK, linkId }
}

export const createLink = linkName => dispatch => {
  axios
    .post('/api/links', { linkName })
    .then(data => {
      dispatch(addLink(data))
    })
    .catch(error => {
      console.log('error', error)
    })
}

export const fetchLinks = () => dispatch => {
  axios
    .get('api/links')
    .then(({ data }) => {
      dispatch(addLinks(data))
    })
    .catch(error => {
      console.log('error', error)
    })
}

export const updateLink = (linkId, linkName) => dispatch => {
  axios
    .put(`/api/link/${linkId}`, { linkName })
    .then(({ data }) => {
      dispatch(editLink(data))
    })
    .catch(error => {
      console.log('error:', error)
    })
}
