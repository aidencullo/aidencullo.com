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
    { text: 'Добро пожаловать', language: 'Russian' },
    { text: 'أهلاً وسهلاً', language: 'Arabic' },
    { text: 'ברוכים הבאים', language: 'Hebrew' },
    { text: 'स्वागत है', language: 'Hindi' },
    { text: 'ยินดีต้อนรับ', language: 'Thai' },
    { text: 'Chào mừng', language: 'Vietnamese' },
    { text: '欢迎', language: 'Chinese (Mandarin)' },
    { text: 'ようこそ', language: 'Japanese' },
    { text: '환영합니다', language: 'Korean' },
    { text: 'Karibu', language: 'Swahili' },
    { text: 'Nau mai', language: 'Maori' }
  ]

  const [welcome, setWelcome] = useState(welcomes[0])
  const translateUrl = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(welcome.text)}&op=translate`

  useEffect(() => {
    const next = welcomes[Math.floor(Math.random() * welcomes.length)]
    setWelcome(next)
  }, [])

  return (
    <div className="bio-container" id="bio">
      <a
        className="bio-welcome"
        href={translateUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bio-welcome-text">{welcome.text}</span>
      </a>
      <ProfilePicture />
      <BioText />
      <BioLinks />
    </div>
  )
}

export default Bio
