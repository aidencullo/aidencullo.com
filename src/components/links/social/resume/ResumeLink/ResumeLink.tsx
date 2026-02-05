import React from 'react'
import Link from '@components/links/Link/Link'

interface ResumeLinkProps {
  children: React.ReactNode
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ children }) => {
  const url = "https://aidencullo.github.io/resume/resume.pdf"
  const title = "Resume"
  
  return (
    <Link href={url} title={title} isExternal={true} download={true}>
      { children }
    </Link>
  )
}

export default ResumeLink
