import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import './Welcome.css'

const Welcome: React.FC = () => {
  const welcomeRef = useScrollAnimation()

  return (
    <div ref={welcomeRef} className="welcome-container" id="welcome">
      <h1 className="name">Welcome!</h1>
    </div>
  )
}

export default Welcome
