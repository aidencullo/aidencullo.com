import React from 'react'
import GitHubIconLink from '@links/social/github/GitHubIconLink/GitHubIconLink'
import LinkedInIconLink from '@links/social/linkedin/LinkedInIconLink/LinkedInIconLink'
import EmailIconLink from '@links/social/email/EmailIconLink/EmailIconLink'
import ResumeIconLink from '@links/social/resume/ResumeIconLink/ResumeIconLink'
import './BioLinks.css'

const BioLinks: React.FC = () => {
  return (
    <div className="bio-links">
      <GitHubIconLink />
      <LinkedInIconLink />
      <EmailIconLink />
      <ResumeIconLink />
    </div>
  )
}

export default BioLinks
