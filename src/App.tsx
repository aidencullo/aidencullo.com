import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Body from '@body/Body'
import VisitorFootprint from '@components/VisitorFootprint/VisitorFootprint'
import ParticleBackground from '@components/ParticleBackground/ParticleBackground'
import Header from '@components/Header/Header'
import SiteFooter from '@components/SiteFooter/SiteFooter'
import BrowserShortcuts from './pages/BrowserShortcuts'
import About from './pages/About'
import Contact from './pages/Contact'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <ParticleBackground />
      <Header />
      {children}
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Body />
            <VisitorFootprint />
          </Layout>
        } />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/posts/browser-shortcuts" element={
          <Layout><BrowserShortcuts /></Layout>
        } />
      </Routes>
    </HashRouter>
  )
}

export default App
