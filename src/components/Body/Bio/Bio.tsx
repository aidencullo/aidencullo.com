import React, { useEffect, useState } from 'react'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  const welcomes = [
    { text: 'Welcome', language: 'English' },
    { text: 'Bienvenido', language: 'Spanish' },
    { text: 'Bienvenue', language: 'French' },
    { text: 'Willkommen', language: 'German' },
    { text: 'Benvenuto', language: 'Italian' },
    { text: 'Bem-vindo', language: 'Portuguese' },
    { text: 'Welkom', language: 'Dutch' },
    { text: 'Witamy', language: 'Polish' },
    { text: 'Καλώς ήρθες', language: 'Greek' },
    { text: 'Привет', language: 'Russian' },
    { text: 'مرحبا', language: 'Arabic' },
    { text: 'שלום', language: 'Hebrew' },
    { text: 'नमस्ते', language: 'Hindi' },
    { text: 'สวัสดี', language: 'Thai' },
    { text: 'Xin chào', language: 'Vietnamese' },
    { text: '你好', language: 'Chinese (Mandarin)' },
    { text: 'こんにちは', language: 'Japanese' },
    { text: '안녕하세요', language: 'Korean' },
    { text: 'Karibu', language: 'Swahili' },
    { text: 'Kia ora', language: 'Maori' }
  ]

  const [welcome, setWelcome] = useState(welcomes[0])
  const [isHoveringWelcome, setIsHoveringWelcome] = useState(false)

  useEffect(() => {
    const next = welcomes[Math.floor(Math.random() * welcomes.length)]
    setWelcome(next)
  }, [])

  return (
    <div className="bio-container" id="bio">
      <div
        className={`bio-welcome ${isHoveringWelcome ? 'is-hovering' : ''}`}
        onMouseEnter={() => setIsHoveringWelcome(true)}
        onMouseLeave={() => setIsHoveringWelcome(false)}
      >
        <span className="bio-welcome-text bio-welcome-original">{welcome.text}</span>
        <span className="bio-welcome-text bio-welcome-english">Welcome</span>
      </div>
      <p className="bio-welcome-language">Language: {welcome.language}</p>
      <ProfilePicture />
      <BioText />
      <BioLinks />
    </div>
  )
}

export default Bio
