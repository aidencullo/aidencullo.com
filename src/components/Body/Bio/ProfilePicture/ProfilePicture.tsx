import React from 'react'
import './ProfilePicture.css'

const CALENDLY_URL = "https://calendly.com/aidencullo/new-meeting"

const ProfilePicture: React.FC = () => {
  const imagePath = "/profile.jpg"
  const altText = "Aiden Cullo"

  return (
    <div className="profile-picture">
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" title="Schedule a meeting">
        <img src={imagePath} alt={altText} />
      </a>
    </div>
  )
}

export default ProfilePicture
