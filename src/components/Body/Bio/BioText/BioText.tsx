import React from 'react'
import './BioText.css'

const BioText: React.FC = () => {
  return (
    <div className="bio-text">
      <p>
        Brooklyn-based software engineer building a water analysis platform at{' '}
        <a href="https://www.techtotherescue.org/">Tech to the Rescue</a>; previously built an LLM system of record at JP Morgan.
      </p>
    </div>
  )
}

export default BioText
