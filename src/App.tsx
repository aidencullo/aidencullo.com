import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Body from '@body/Body'
import VisitorFootprint from '@components/VisitorFootprint/VisitorFootprint'
import ParticleBackground from '@components/ParticleBackground/ParticleBackground'
import BrowserShortcuts from './pages/BrowserShortcuts'

function Home() {
  return (
    <div className="app">
      <ParticleBackground />
      <Body />
      <VisitorFootprint />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/browser-shortcuts" element={
          <div className="app">
            <ParticleBackground />
            <BrowserShortcuts />
          </div>
        } />
      </Routes>
    </HashRouter>
  )
}

export default App
