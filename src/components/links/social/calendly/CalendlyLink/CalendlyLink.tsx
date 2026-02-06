import React from 'react'
import ExternalLink from '@links/ExternalLink/ExternalLink'

interface CalendlyLinkProps {
  children: React.ReactNode
  className?: string
}

const CalendlyLink: React.FC<CalendlyLinkProps> = ({ children, className }) => {
  const url = "https://calendly.com/aidencullo/new-meeting"
  const title = "Calendly"

  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default CalendlyLink
