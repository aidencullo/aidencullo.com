import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className="site-header">
      <Link to="/" className="header-logo">aidencullo.com</Link>
      <nav className="header-nav">
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
