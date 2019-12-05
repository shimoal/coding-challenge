import React from 'react'
import { Link } from 'react-router-dom'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import { connect } from 'react-redux'
import { deleteLink, editLink } from '../redux/actions'
import './LinkList.scss'

class LinkListItem extends React.Component {
  state = {
    newLinkName: this.props.linkName,
    isEditing: false,
  }

  editNameCallback = event => {
    this.setState({ isEditing: false })
    this.props.dispatch(editLink(this.props.linkName, event.target.value))
  }

  editName = () => {
    this.setState({ isEditing: true })
  }

  render() {
    const { linkName, dispatch } = this.props
    const { newLinkName, isEditing } = this.state
    return (
      <div className='link-list-item'>
        <div className='link-click-tracker'>
          <p>Times clicked:</p>
          0
        </div>
        { this.state.isEditing ?
          <InlineEdit
            name='new-link-name'
            value={ newLinkName }
            isEditing={ isEditing }
            changeCallback={ this.editNameCallback }
          /> :
          <Link to={ linkName }>
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
            onClick={() => dispatch(deleteLink(linkName))}
          >
            Delete
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(null)(LinkListItem)
