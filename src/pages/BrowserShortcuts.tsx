import React from 'react'
import { Link } from 'react-router-dom'
import './BrowserShortcuts.css'

interface Shortcut {
  keys: string
  description: string
}

const shortcuts: Shortcut[] = [
  { keys: 'Cmd+L', description: 'Jump to the address bar. Highlights the URL so you can type a new one or search. Huge for keyboard-driven browsing.' },
  { keys: 'Cmd+M', description: 'Minimize the window. Simple but way faster than reaching for the mouse.' },
  { keys: 'Cmd+Ctrl+F', description: 'Enter full screen. No menu bar, no dock — just the page. Press again to exit.' },
  { keys: 'Cmd+T', description: 'Open a new tab.' },
  { keys: 'Cmd+W', description: 'Close the current tab without touching the X.' },
  { keys: 'Cmd+Shift+T', description: 'Reopen the last closed tab. Press repeatedly to step back through your history.' },
  { keys: 'Cmd+R', description: 'Reload the page. Add Shift for a hard reload that bypasses the cache.' },
  { keys: 'Cmd+F', description: 'Find on page. Jump to any word on the current page instantly.' },
  { keys: 'Cmd+[  /  Cmd+]', description: 'Go back or forward. Same as the arrow buttons, without moving your hands.' },
  { keys: 'Cmd+Shift+N', description: 'Open a private/incognito window. No cookies, no session, no history.' },
]

const BrowserShortcuts: React.FC = () => {
  return (
    <div className="shortcuts-page">
      <div className="shortcuts-container">
        <Link to="/" className="shortcuts-back">← back</Link>

        <header className="shortcuts-header">
          <p className="shortcuts-date">Mar 6, 2026</p>
          <h1 className="shortcuts-title">browser shortcuts</h1>
          <p className="shortcuts-subtitle">
            Ten Chrome/Firefox shortcuts I keep coming back to.
          </p>
        </header>

        <ul className="shortcuts-list">
          {shortcuts.map((s) => (
            <li key={s.keys} className="shortcuts-item">
              <span className="shortcuts-keys">{s.keys}</span>
              <span className="shortcuts-desc">{s.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowserShortcuts
