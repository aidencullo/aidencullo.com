import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'
import './HeaderLeft.css'

const HeaderLeft: React.FC = () => {
  return (
    <div className="header-left">
        <InternalLink href="#" title="Home" className="header-home-link">home</InternalLink>
        <InternalLink href="#bio" title="About" className="header-about-link">about me</InternalLink>
    </div>
  )
}

export default HeaderLeft
