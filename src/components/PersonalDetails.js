// PersonalDetails.js

import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <ul>
        <li><strong>Name:</strong> Your Name</li>
        <li><strong>Email:</strong> your@email.com</li>
        <li><strong>Location:</strong> Your City, Country</li>
      </ul>
    </div>
  );
}

export default PersonalDetails;

/* Apply CSS styling for personal details within PersonalDetails.module.css */
