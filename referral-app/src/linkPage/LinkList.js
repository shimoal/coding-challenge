import React from 'react'
import { connect } from 'react-redux'
import LinkListItem from './LinkListItem'
import './LinkList.scss'


const LinkList = ({ links }) => (
  <div className='link-list'>
    <h2>Existing Links</h2>
    {
      links.map(link => (
        <LinkListItem key={link.id} link={ link } />
      ))
    }
  </div>
)

const mapStateToProps = ({ links }) => ({
  links
})

export default connect(mapStateToProps)(LinkList)
