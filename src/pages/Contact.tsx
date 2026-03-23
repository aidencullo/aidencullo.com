import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>Want to get in touch? Here's how you can reach me.</p>
      <div className="contact-links">
        <a href="mailto:aidencullo@gmail.com" className="contact-card">
          <span className="contact-label">Email</span>
          <span className="contact-value">aidencullo@gmail.com</span>
        </a>
        <a href="https://github.com/aidencullo" target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">aidencullo</span>
        </a>
        <a href="https://www.linkedin.com/in/aidencullo" target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">aidencullo</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
