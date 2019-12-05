import React from 'react'
import { connect } from 'react-redux'
import LinkListItem from './LinkListItem'
import './LinkList.scss'


const LinkList = ({ linkNames }) => (
  <div className='link-list'>
    <h2>Existing Links</h2>
    {
      linkNames.map((linkName, i) => (
        <LinkListItem key={`link-${i}`} linkName={ linkName } />
      ))
    }
  </div>
)

const mapStateToProps = ({ linkNames }) => ({
  linkNames
})

export default connect(mapStateToProps)(LinkList)
