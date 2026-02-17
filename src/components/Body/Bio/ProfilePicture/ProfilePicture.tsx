import React from 'react'
import './ProfilePicture.css'

const ProfilePicture: React.FC = () => {
  const imagePath = "/profile.jpg"
  const altText = "Aiden Cullo"
  const flickrUrl = "https://www.flickr.com/photos/136772980@N04/"
  
  return (
    <div className="profile-picture">
      <a href={flickrUrl} target="_blank" rel="noopener noreferrer">
        <img src={imagePath} alt={altText} />
      </a>
    </div>
  )
}

export default ProfilePicture
