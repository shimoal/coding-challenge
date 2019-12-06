import React from 'react'
import { connect } from 'react-redux'
import FormGroup from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style.scss'
import './CreateLinkForm.scss'
import { createLink } from '../redux/actions'

const initialSchema = { 'link-name': { value: '' } }

class CreateLinkForm extends React.Component {
  state = {
    schema: initialSchema,
    error: '',
  }

  handleChange = fields => {
    this.setState({ schema: fields })
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    const linkName = fields['link-name'].value
    const error = this.validateLinkName(linkName)
    if (!error) {
      this.props.dispatch(createLink(fields['link-name'].value))
      this.setState({ schema: initialSchema, error: '' })
    } else {
      this.setState({ error })
    }
  }

  validateLinkName = linkName => {
    const existingLinkNames = this.props.links.map(({ linkName }) => linkName)
    const errors = {
      existingName: 'This link already exists.',
      linkNameEmpty: 'Your link must be at least 1 character long',
    }
    if (existingLinkNames.includes(linkName)) {
      return errors.existingName
    }
    if (linkName.length === 0) {
      return errors.linkNameEmpty
    }
    return null
  }

  render() {
    const { schema, error } = this.state
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        debounceTime={100}
        schema={schema}
      >
        <h2>Add new link to list</h2>
        <div className={`fieldset-container ${error.length && 'error'}`} >
          <div>
            <Input
              name='link-name'
              label='Link Name'
              type='text'
              optClass={formStyle.field}
              placeholder='my new link'
            />
            { error }
          </div>
          <Button className='btn' type='submit'>Submit</Button>
        </div>
      </FormGroup>
    )
  }
}

const mapStateToProps = ({ links }) => ({ links })

export default connect(mapStateToProps)(CreateLinkForm)
