import './App.css'
import Body from '@body/Body'
import VisitorFootprint from '@components/VisitorFootprint/VisitorFootprint'
import ParticleBackground from '@components/ParticleBackground/ParticleBackground'

function App() {

  return (
    <div className="app">
      <ParticleBackground />
      <Body />
      <VisitorFootprint />
    </div>
  )
}

export default App
