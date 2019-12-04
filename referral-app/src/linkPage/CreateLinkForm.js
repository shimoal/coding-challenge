import React from 'react'
import FormGroup from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style.scss'

class CreateLinkForm extends React.Component {
  state = {
    schema: {
      'link-name': {
        value: ''
      }
    }
  }

  handleChange = fields => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    alert(JSON.stringify(fields, 2, null))
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        debounceTime={250}
        schema={this.state.schema}
      >
        <Input
          name='link-name'
          label='Link Name'
          type='text'
          optClass={formStyle.field}
          placeholder='my new link'
        />
        <Button type='submit'>Submit</Button>
      </FormGroup>
    )
  }
}

export default CreateLinkForm
