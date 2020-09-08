import React from 'react';
import './navigation.styles.scss';

function Navigation() {
    return (
      <div className="navbar">
        <div className="feed nav-items">
          <a>Feed</a>
        </div>
        <div className="explore nav-items">
          <a>Explore</a>
        </div>
        <div className="record nav-items">
          <a>Record</a>
        </div>
        <div className="profile nav-items">
          <a>Profile</a>
        </div>
        <div className="training nav-items">
          <a>Training</a>
        </div>
      </div>
    );
}

export default Navigation;