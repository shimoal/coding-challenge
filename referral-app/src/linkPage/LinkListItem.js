import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-ions/lib/components/Button'
import { connect } from 'react-redux'
import { deleteLink } from '../redux/actions'

const LinkListItem = ({ linkName, dispatch }) => (
  <div>
    <Link to={ linkName }>
      { linkName }
    </Link>
    <Button
      className='btn danger'
      onClick={() => dispatch(deleteLink(linkName))}
    >
      Delete
    </Button>
  </div>
)

export default connect(null)(LinkListItem)
