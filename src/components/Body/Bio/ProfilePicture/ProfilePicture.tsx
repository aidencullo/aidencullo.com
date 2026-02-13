import React from 'react'
import LinkedInLink from '@links/social/linkedin/LinkedInLink/LinkedInLink'
import './ProfilePicture.css'

const ProfilePicture: React.FC = () => {
  const imagePath = "/profile.jpg"
  const altText = "Aiden Cullo"
  
  return (
    <div className="profile-picture">
      <LinkedInLink className="profile-picture-link">
        <img src={imagePath} alt={altText} />
      </LinkedInLink>
    </div>
  )
}

export default ProfilePicture
