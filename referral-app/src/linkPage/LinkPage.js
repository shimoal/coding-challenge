import React from 'react';
import CreateLinkForm from './CreateLinkForm'
import LinkList from './LinkList'

const LinkPage = () => (
  <div>
    <h1>Link Page</h1>
    <p>Type your link below to add it to the list!</p>
    <CreateLinkForm />
    <LinkList />
  </div>
)

export default LinkPage
