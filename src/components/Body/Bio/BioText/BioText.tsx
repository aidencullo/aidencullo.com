import React from 'react'
import { useLanguage } from '@hooks/useLanguage'
import './BioText.css'

const BioText: React.FC = () => {
  const englishBioText = "Brooklyn-based software engineer building a water analysis platform at Tech to the Rescue; previously built an LLM system of record at JPMC."
  const spanishBioText = "Ingeniero de software radicado en Brooklyn que construye una plataforma de análisis de agua en Tech to the Rescue; anteriormente construí un sistema de registro de LLM en JPMC."
  const frenchBioText = "Ingénieur logiciel basé à Brooklyn construisant une plateforme d'analyse de l'eau chez Tech to the Rescue; auparavant, j'ai construit un système de registre LLM chez JPMC."
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
