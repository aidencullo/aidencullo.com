import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>
        Email me at{' '}
        <a href="mailto:aidencullo@gmail.com">aidencullo at gmail dot com</a>{' '}
        — read it aloud like a password over a bad phone line.
      </p>

      <div className="contact-links">
        <a
          className="contact-card"
          href="https://calendly.com/aidencullo/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-label">Or book a call</span>
          <span className="contact-value">15 minutes on Calendly ↗</span>
        </a>
        <a
          className="contact-card"
          href="https://x.com/CuloEgan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-label">Or say hi on X</span>
          <span className="contact-value">@CuloEgan ↗</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
