// Image.js

import React from 'react';
import MyProfileImage from '../assets/profile_image.jpg'

const Image = () => {
  return (
    <div className="image-container">
      <img src={MyProfileImage} alt="Your Image" className="profile-image" />
    </div>
  );
}

export default Image;

/* Apply CSS styling for the image within Image.module.css */
