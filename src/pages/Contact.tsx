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
    </div>
  )
}

export default Contact
