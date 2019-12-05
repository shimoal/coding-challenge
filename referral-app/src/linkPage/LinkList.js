import React from 'react'
import { connect } from 'react-redux'
import LinkListItem from './LinkListItem'
import './LinkList.scss'
import { fetchLinks } from '../redux/actions'

class LinkList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLinks())
  }

  render() {
    const { links } = this.props
    return (
      <div className='link-list'>
        <h2>Existing Links</h2>
        {
          links.map(link => (
            <LinkListItem key={link.id} link={ link } />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ links }) => ({
  links
})

export default connect(mapStateToProps)(LinkList)
