import React from 'react'
import { Link } from 'react-router-dom'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import { connect } from 'react-redux'
import { deleteLink, editLink, clickLink, updateLink } from '../redux/actions'
import './LinkList.scss'

class LinkListItem extends React.Component {
  state = {
    newLinkName: this.props.link.linkName,
    isEditing: false,
  }

  editNameCallback = event => {
    const { dispatch, link: { id }} = this.props
    this.setState({ isEditing: false })
    dispatch(updateLink(id, event.target.value))
  }

  editName = () => {
    this.setState({ isEditing: true })
  }

  render() {
    const { link: { id, linkName, clickCount }, dispatch } = this.props
    const { newLinkName, isEditing } = this.state
    return (
      <div className='link-list-item'>
        <div className='link-click-tracker'>
          <p>Times clicked:</p>
          { clickCount }
        </div>
        { this.state.isEditing ?
          <InlineEdit
            name='new-link-name'
            value={ newLinkName }
            isEditing={ isEditing }
            changeCallback={ this.editNameCallback }
          /> :
          <Link to={ linkName } onClick={() => dispatch(clickLink(id))}>
            { linkName }
          </Link>
        }
        <div>
          <Button
            className='btn'
            onClick={ this.editName }
          >
            Edit
          </Button>
          <Button
            className='btn danger'
            onClick={() => dispatch(deleteLink(id))}
          >
            Delete
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(null)(LinkListItem)
