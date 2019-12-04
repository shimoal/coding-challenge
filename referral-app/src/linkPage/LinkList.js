import React from 'react'
import { connect } from 'react-redux'
import LinkListItem from './LinkListItem'

const LinkList = ({ linkNames }) => (
  <div>
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
