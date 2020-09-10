import React from 'react';
import './header.styles.scss';

function Header () {
    return (
      <div id="header">
        <div className="user-information">
          <div className="user-profile-image"></div>
          <p>Andrew Rymer</p>
          <p>Greenville, SC</p>
        </div>
      </div>
    );
}

export default Header;