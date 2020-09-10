import React from 'react';
import './header.styles.scss';

function Header () {
    return (
      <div id="header">
        <p className="page-title">Profile</p>
        <div className="page-action-icons">
          <span>Thing1</span>
          <span>Thing2</span>
        </div>
      </div>
    );
}

export default Header;