import React from 'react'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  return (
    <div className="bio-container" id="bio">
      <ProfilePicture />
      <BioText />
      <BioLinks />
    </div>
  )
}

export default Bio
