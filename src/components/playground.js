// App.js

import React from 'react';
import Image from './Image';
import MyNewSocialLinks from './MyNewSocialLinks';
import PersonalDetails from './PersonalDetails';

const Playground = () => {
  return (
    <div className="app">
      <div className="main-content">
        <div className="left-section">
          <Image />
          <MyNewSocialLinks />
        </div>
        <div className="right-section">
          <PersonalDetails />
        </div>
      </div>
    </div>
  );
}

export default Playground;
