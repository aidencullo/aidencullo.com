import React from 'react'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  return (
    <div className="bio-container" id="bio">
      <ProfilePicture />
      <hr className="bio-divider" />
      <BioText />
      <hr className="bio-divider" />
      <BioLinks />
    </div>
  )
}

export default Bio
