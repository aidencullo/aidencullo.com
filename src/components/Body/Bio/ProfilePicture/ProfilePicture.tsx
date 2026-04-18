import React from 'react'
import { Link } from 'react-router-dom'
import './ProfilePicture.css'

const ProfilePicture: React.FC = () => {
  const imagePath = "/profile.jpg"
  const altText = "Aiden Cullo"

  return (
    <div className="profile-picture">
      <Link to="/about" title="About">
        <img src={imagePath} alt={altText} />
      </Link>
    </div>
  )
}

export default ProfilePicture
