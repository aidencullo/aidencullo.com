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
        What I'm looking for is ways to leverage technology to protect vulnerable
        populations and promote equality and justice. I'm currently exploring how
        we can achieve this — is it through developing responsible AI and trusting
        it? A different technology, a more transparent rendition of AI? Or can we
        build non-AI safeguards for AI? I want to work at the intersection of
        software, AI, and human rights to preserve and strengthen the democratic
        institutions we have and bolster human agency and cooperation.
      </p>
    </div>
  )
}

export default About
