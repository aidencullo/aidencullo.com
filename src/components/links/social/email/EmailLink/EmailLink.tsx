import React from 'react'
import ExternalLink from '@links/ExternalLink/ExternalLink'

interface EmailLinkProps {
  children: React.ReactNode
  className?: string
}

const EmailLink: React.FC<EmailLinkProps> = ({ children, className }) => {
  const email = "barrymccockner@duck.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default EmailLink
