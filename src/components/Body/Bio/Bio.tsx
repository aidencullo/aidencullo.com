import React, { useEffect, useState } from 'react'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  const welcomes = [
    'Welcome',
    'Bienvenido',
    'Bienvenue',
    'Willkommen',
    'Benvenuto',
    'Bem-vindo',
    'Velkommen',
    'Välkommen',
    'Tervetuloa',
    'Witamy',
    'Dobro došli',
    'Tervist',
    'Welkom',
    'Καλώς ήρθες',
    'Привет',
    'مرحبا',
    'שלום',
    'हैलो',
    'স্বাগতম',
    'வணக்கம்',
    'ನಮಸ್ಕಾರ',
    'สวัสดี',
    'Xin chào',
    '你好',
    'こんにちは',
    '안녕하세요',
    'Mabuhay',
    'Sawubona',
    'Karibu',
    'Salam'
  ]

  const [welcome, setWelcome] = useState('Welcome')

  useEffect(() => {
    const next = welcomes[Math.floor(Math.random() * welcomes.length)]
    setWelcome(next)
  }, [])

  return (
    <div className="bio-container" id="bio">
      <div className="bio-welcome">{welcome}</div>
      <ProfilePicture />
      <BioText />
      <BioLinks />
    </div>
  )
}

export default Bio
