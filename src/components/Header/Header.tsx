import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className="site-header">
      <a href="/" className="header-logo" aria-label="Go to home page">aidencullo.com</a>
      <nav className="header-nav">
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
