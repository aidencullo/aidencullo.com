import React from 'react'
import './LanguageSelector.css'
import { useLanguageCustom } from '@hooks/useLanguage'

const LanguageSelector: React.FC = () => {
  const { language, setLanguageCustom } = useLanguageCustom()
  const englishCode = "english"
  const spanishCode = "español"

  const changeLanguage = () => {
    setLanguageCustom(language === englishCode ? spanishCode : englishCode)
  }

  return (
    <div onClick={changeLanguage} className="language-selector">
      {language === englishCode ? spanishCode : englishCode}
    </div>
  )
}

export default LanguageSelector
