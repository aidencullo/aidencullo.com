import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I'm Aiden Cullo, a software engineer based in New York with 5+ years of
        experience building full-stack web applications, cloud infrastructure,
        and data pipelines. I care about writing clean code and using technology
        to make the world a better place.
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

      <h2>What I Do</h2>
      <ul>
        <li>Full-stack web development</li>
        <li>Cloud infrastructure &amp; DevOps</li>
        <li>Real-time data pipelines &amp; video processing</li>
        <li>ML platform engineering</li>
        <li>Open source contributions</li>
      </ul>

      <h2>Experience</h2>
      <p>
        Currently a Lead Software Engineer at Tech To The Rescue, where I'm
        building real-time video ingestion pipelines, deploying infrastructure
        on AWS with Terraform, and constructing monitoring dashboards for water
        supply stations.
      </p>
      <p>
        Previously at JPMorgan Chase, I built dashboards for visualizing 1k+
        LLMs and worked on ML platform security and compliance. Before that, I
        built REST APIs, payment integrations, and progressive web apps at
        startups including HeroGrow, Tradigro, and SuperCerebros.
      </p>
      <p>
        I've also done research at SUNY Binghamton and Caltech in computational
        physics, and interned at Sapienza University of Rome building neural
        networks for particle physics.
      </p>

      <h2>Tech</h2>
      <p>
        Python, TypeScript, React, Ruby on Rails, FastAPI, Node.js, Docker,
        Kubernetes, Terraform, AWS, PostgreSQL, Redis, and more.
      </p>

      <h2>Education</h2>
      <p>
        Triple major from SUNY Binghamton — BS Computer Science, BS Mathematics,
        and BS Applied Physics.
      </p>

      <h2>Languages</h2>
      <p>
        English (native), Spanish (fluent), French (proficient), Portuguese (basic),
        Mandarin (basic).
      </p>
    </div>
  )
}

export default About
