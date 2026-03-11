import React from 'react'
import ExternalLink from '@links/ExternalLink/ExternalLink'

interface SpotifyLinkProps {
  children: React.ReactNode
  className?: string
}

const SpotifyLink: React.FC<SpotifyLinkProps> = ({ children, className }) => {
  const url = "https://spotify.aidencullo.com"
  const title = "Spotify"

  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default SpotifyLink
