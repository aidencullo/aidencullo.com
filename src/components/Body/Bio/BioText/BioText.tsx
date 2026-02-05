import React from 'react'
import { useLanguage } from '@hooks/useLanguage'
import './BioText.css'

const BioText: React.FC = () => {
  const englishBioText = "Hello :) My name is Aiden. I'm a software engineer based out of Brooklyn! Currently, I'm building a clean water analysis platform at Tech to the Rescue. Previously, I built a LLM system-of-record at JPMC."
  const spanishBioText = "Hola :) Me llamo Aiden. Soy ingeniero de software en Brooklyn. Actualmente, estoy construyendo una plataforma de análisis de agua potable en Tech to the Rescue. Anteriormente, construí un sistema de registro de LLM en JPMC."
  const frenchBioText = "Bonjour :) Je m'appelle Aiden. Je suis ingénieur logiciel basé à Brooklyn. Actuellement, je développe une plateforme d'analyse de l'eau potable chez Tech to the Rescue. Auparavant, j'ai construit un système de registre LLM chez JPMC."
  const { language } = useLanguage()

  const getBioText = () => {
    if (language === "english") return englishBioText
    if (language === "español") return spanishBioText
    return frenchBioText
  }

  return (
    <div className="bio-text">
      <p>{getBioText()}</p>
    </div>
  )
}

export default BioText
