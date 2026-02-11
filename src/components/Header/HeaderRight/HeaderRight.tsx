import React, { useEffect, useState } from 'react'
import ThemeButton from './ThemeButton/ThemeButton'
import './HeaderRight.css'

const HeaderRight: React.FC = () => {
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
    <div className="header-right">
      <span className="header-welcome">{welcome}</span>
      <ThemeButton />
    </div>
  )
}

export default HeaderRight
