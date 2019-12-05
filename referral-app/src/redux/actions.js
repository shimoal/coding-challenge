import axios from 'axios'

/* Action types */
export const ADD_LINK = 'ADD_LINK'
export const ADD_LINKS = 'ADD_LINKS'
export const DELETE_LINK = 'DELETE_LINK'
export const EDIT_LINK = 'EDIT_LINK'

/* Action creators */
export const addLink = link => {
  return { type: ADD_LINK, link }
}

export const addLinks = links => {
  return { type: ADD_LINKS, links }
}

const deleteLinkId = linkId => {
  console.log('linkId of delete', linkId)
  return { type: DELETE_LINK, linkId }
}

export const editLink = link => {
  return { type: EDIT_LINK, link }
}

export const createLink = linkName => dispatch => {
  axios
    .post('/api/links', { linkName })
    .then(({ data }) => {
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

export const updateLinkName = (linkId, linkName) => dispatch => {
  axios
    .put(`/api/link/${linkId}`, { linkName })
    .then(({ data }) => {
      dispatch(editLink(data))
    })
    .catch(error => {
      console.log('error:', error)
    })
}

export const updateClickCount = (linkId, clickCount) => dispatch => {
  axios
    .put(`/api/link/${linkId}`, { clickCount })
    .then(({ data }) => {
      dispatch(editLink(data))
    })
    .catch(error => {
      console.log('error:', error)
    })
}

export const deleteLink = linkId => dispatch => {
  axios
    .delete(`/api/link/${linkId}`)
    .then(data => {
      console.log('linkId:', linkId)
      dispatch(deleteLinkId(linkId))
    })
    .catch(error => {
      console.log('error:', error)
    })
}
