import React from 'react';

function Profile() {
    return (
      <div id="profile">
        <div className="user-information">
          <div className="user-profile-image"></div>
          <p>Andrew Rymer</p>
          <p>Greenville, SC</p>
        </div>
        <div id="most-common-workouts"></div>
        <div id="goals"></div>
        <div id="misc-stats"></div>
        <div id="predefined-content"></div>
      </div>
    );
}

export default Profile;