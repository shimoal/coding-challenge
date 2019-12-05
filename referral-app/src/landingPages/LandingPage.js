import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './LandingPage.scss'

const data = [{ name: 'Home', action: '/' }]

const LandingPage = () => {
  const { pageTitle } = useParams()
  return (
    <div>
      <header>
        <h1>{ pageTitle }</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LandingPage
