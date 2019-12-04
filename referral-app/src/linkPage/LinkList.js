import React from 'react'
import { connect } from 'react-redux'

const LinkList = ({ linkNames }) => (
  <div>
    {
      linkNames.map((linkName, i) => (
        <div key={`link-${i}`}>{ linkName }</div>
      ))
    }
  </div>
)

const mapStateToProps = ({ linkNames }) => ({
  linkNames
})

export default connect(mapStateToProps)(LinkList)
