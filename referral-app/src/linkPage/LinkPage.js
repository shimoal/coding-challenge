import React from 'react';
import CreateLinkForm from './CreateLinkForm'
import LinkList from './LinkList'
import './LinkPage.scss'

const LinkPage = () => (
  <div className='link-page'>
    <header>
      <h1>Create and Track Referrals for the New World Wide Web</h1>
      <p>View, edit, or delete the existing links below, or create your own!</p>
    </header>
    <CreateLinkForm />
    <LinkList />
  </div>
)

export default LinkPage
