import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I'm Aiden Cullo, a software engineer based in New York with 4+ years of
        experience spanning full-stack web development, cloud infrastructure, ML
        platforms, and real-time data pipelines. I've worked at Tradigro,
        JPMorgan Chase, and now Tech To The Rescue — building everything from
        progressive web apps serving 10k+ users to ML dashboards tracking 1k+
        models. I hold three degrees from SUNY Binghamton in Computer Science,
        Mathematics, and Applied Physics, and I've done research at Caltech and
        Sapienza University of Rome. I care about writing clean code and using
        technology to make the world a better place.
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
