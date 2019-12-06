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
    schema: initialSchema
  }

  handleChange = fields => {
    this.setState({ schema: fields })
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    this.props.dispatch(createLink(fields['link-name'].value))
    this.setState({ schema: initialSchema })
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        debounceTime={100}
        schema={this.state.schema}
      >
        <h2>Add new link to list</h2>
        <div className='fieldset-container'>
          <Input
            name='link-name'
            label='Link Name'
            type='text'
            optClass={formStyle.field}
            placeholder='my new link'
          />
          <Button className='btn' type='submit'>Submit</Button>
        </div>
      </FormGroup>
    )
  }
}

export default connect(null)(CreateLinkForm)
