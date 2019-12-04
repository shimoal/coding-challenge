import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-ions/lib/components/Button'

const LinkListItem = ({ linkName }) => (
  <div>
    <Link to={ linkName }>
      { linkName }
    </Link>
    <Button className='btn danger'>
      Delete
    </Button>
  </div>
)

export default LinkListItem
