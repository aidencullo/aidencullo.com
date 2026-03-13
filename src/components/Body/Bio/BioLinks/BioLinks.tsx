import React from 'react'
import GitHubIconLink from '@links/social/github/GitHubIconLink/GitHubIconLink'
import LinkedInIconLink from '@links/social/linkedin/LinkedInIconLink/LinkedInIconLink'
import EmailIconLink from '@links/social/email/EmailIconLink/EmailIconLink'
import ResumeIconLink from '@links/social/resume/ResumeIconLink/ResumeIconLink'
import ExternalLink from '@links/ExternalLink/ExternalLink'
import './BioLinks.css'

const CALENDLY_URL = "https://calendly.com/aidencullo/new-meeting"

const BioLinks: React.FC = () => {
  return (
    <div className="bio-links">
      <GitHubIconLink />
      <LinkedInIconLink />
      <EmailIconLink />
      <ResumeIconLink />
      <ExternalLink href={CALENDLY_URL} title="Schedule a meeting" className="contact-cta">
        Contact me
      </ExternalLink>
    </div>
  )
}

export default BioLinks
