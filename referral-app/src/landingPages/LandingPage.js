import React from 'react'
import { useParams } from 'react-router-dom'

const LandingPage = () => {
  const { pageTitle } = useParams()
  return (
    <div>
      <h1>{ pageTitle }</h1>
    </div>
  )
}

export default LandingPage
