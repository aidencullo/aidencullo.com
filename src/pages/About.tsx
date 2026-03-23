import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I'm Aiden Cullo, a software engineer based in New York. I build things
        for the web and care about making technology that helps people.
      </p>
      <p>
        I'm passionate about clean code, open source, and using technology to
        make the world a better place.
      </p>
      <h2>What I Do</h2>
      <ul>
        <li>Full-stack web development</li>
        <li>DevOps</li>
        <li>Open source contributions</li>
        <li>Technical writing</li>
      </ul>
    </div>
  )
}

export default About
