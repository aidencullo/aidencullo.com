import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import SpotifyLink from '../SpotifyLink/SpotifyLink'

const SpotifyIconLink: React.FC = () => {
  return (
    <SpotifyLink>
      <span className="link-icon"><FaSpotify /></span>
    </SpotifyLink>
  )
}

export default SpotifyIconLink
