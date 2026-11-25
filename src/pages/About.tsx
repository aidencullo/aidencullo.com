import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I'm Aiden Cullo, a NYC-based software engineer with 4+ years across
        full-stack, cloud, ML, and real-time data. I've shipped products at
        Tradigro, JPMorgan Chase, and Tech To The Rescue — from apps serving
        10k+ users to dashboards tracking 1k+ models — with degrees from
        Binghamton and research at Caltech and Sapienza.
      </p>
      <p>
        I'm looking for innovative ways to use technology to alleviate economic,
        social, and political inequalities. I care about human rights, privacy,
        and digital information rights, and I want to build products that
        leverage software and AI to promote equality and justice — specifically
        by protecting and safeguarding the information of users on the internet.
      </p>
    </div>
  )
}

export default About
