import React from 'react'
import { Link } from 'react-router-dom'
import './SiteFooter.css'

const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/aidencullo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aidencullo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="footer-powered">
        Hosted on GitHub Pages.
      </div>
    </footer>
  )
}

export default SiteFooter
