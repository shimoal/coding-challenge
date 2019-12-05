import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './LandingPage.scss'
import SampleText from './SampleText'

const LandingPage = () => {
  const { pageTitle } = useParams()
  return (
    <div className='landing-page'>
      <header>
        <h1>{ pageTitle }</h1>
      </header>
      <div className='content'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>
        <SampleText />
      </div>
    </div>
  )
}

export default LandingPage
