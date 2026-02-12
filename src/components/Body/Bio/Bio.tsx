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
    'Salam',
    'Bienvenidos',
    'Bienvenidas',
    'Bem vindo',
    'Bine ati venit',
    'Üdvözöljük',
    'Vítejte',
    'Vitajte',
    'Dobrodošli',
    'Добро пожаловать',
    'Ласкаво просимо',
    'Қош келдіңіз',
    'Қош келдің',
    'Қош келдіңіздер',
    'Xush kelibsiz',
    'Hoş geldiniz',
    'Tere tulemast',
    'Laipni lūdzam',
    'Sveiki atvykę',
    'Croeso',
    'Fáilte',
    'स्वागत',
    'सु-स्वागतम्',
    'સ્વાગત છે',
    'स्वागत छ',
    'स्वागत आहे',
    'ਸੁਆਗਤ ਹੈ',
    'സ്വാഗതം',
    'ఆహ్వానం',
    'ආයුබෝවන්',
    'ຍິນດີຕ້ອນຮັບ',
    'សូមស្វាគមន៍',
    'မင်္ဂလာပါ',
    'Selamat datang',
    'Selamat Datang',
    'Maligayang pagdating',
    'Ahlan wa sahlan',
    'أهلا وسهلا',
    'خوش آمدید',
    'خوش آمدي',
    'Merhaba',
    'Aloha',
    'Talofa',
    'Kia ora',
    'Haere mai',
    'Bula',
    'Namaste',
    'Sannu da zuwa',
    'Barka da zuwa',
    'Ku soo dhawoow',
    'Soo dhowow',
    'Nnọọ',
    'Kaabo',
    'Bonvenon',
    'Irasshaimase',
    'Marhaban bik',
    'Tashi delek',
    'Kuzu zangpo la',
    'Julley',
    'Yáʼátʼééh',
    'Alii',
    'Halo',
    'Selamün aleyküm',
    'As-salaam alaikum',
    'Shalom',
    'Sat sri akaal',
    'Salve',
    'Ciao',
    'Hej',
    'Hei',
    'Moien'
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
