import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import EmailLink from '../EmailLink/EmailLink'

const EmailIconLink: React.FC = () => {
  return (
    <EmailLink className="email-icon-link">
      <span className="link-icon"><FaEnvelope /></span>
    </EmailLink>
  )
}

export default EmailIconLink
