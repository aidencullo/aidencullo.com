import React from 'react'
import './SiteFooter.css'

const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-copy">© {new Date().getFullYear()} Aiden Cullo</div>
      <div className="footer-powered">Hosted by GitHub Pages</div>
    </footer>
  )
}

export default SiteFooter
