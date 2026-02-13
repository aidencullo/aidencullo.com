import React from 'react'
import './ProfilePicture.css'

const ProfilePicture: React.FC = () => {
  const imagePath = "/profile.jpg"
  const altText = "Aiden Cullo"
  
  return (
    <div className="profile-picture">
      <img src={imagePath} alt={altText} />
    </div>
  )
}

export default ProfilePicture
