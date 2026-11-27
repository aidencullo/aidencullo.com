import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Moi</h1>
      <p>
        Aiden — NYC-based software engineer with 4+ years across
        full-stack, cloud, ML, and real-time data. I've shipped products at
        Tradigro, JPMorgan Chase, and Tech To The Rescue, from apps serving
        10k+ users to dashboards tracking 1k+ models. Degrees from Binghamton;
        research at Caltech and Sapienza University of Rome.
      </p>
      <p>
        Looking for ways to use tech to reduce inequality — with privacy,
        human rights, and digital information rights front and center.
      </p>
    </div>
  )
}

export default About
