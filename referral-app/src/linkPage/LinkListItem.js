import React from 'react'
import { Link } from 'react-router-dom'

const LinkListItem = ({ linkName }) => (
  <Link to={ linkName }>
    <div>
      {
        linkName
      }
    </div>
  </Link>
)

export default LinkListItem
