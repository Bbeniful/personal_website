// SocialLinks.js

import React from 'react';
import email from '../assets/icon_email.png'
import linkedIn from '../assets/icon_linkedin.png'
import threads from '../assets/icon_threads.png'


const MyNewSocialLinks = () => {
  return (
    <div className="social-links">
      <ul className="social-list">
        <li><a href="https://www.linkedin.com/in/benj%C3%A1min-szil%C3%A1gyi-95ab14103/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt='my profile image'/></a></li>
        <li><a href="https://www.threads.net/@just_benjamins_things" target="_blank" rel="noopener noreferrer"><img src={threads} alt='my profile image'/></a></li>
        <li><a href="mailto:bbenikeszi@gmail.com"><img src={email} alt='my profile image' id="email"/></a></li>
      </ul>
    </div>
  );
}

export default MyNewSocialLinks;

/* Apply CSS styling for social links within SocialLinks.module.css */
