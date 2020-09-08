import React from 'react';

function Profile() {
    return (
      <div className="home">
        <div id="header"></div>
        <div id="user">
          <div className="user-information">
            <h5>Andrew Rymer</h5>
            <p>Greenville, SC</p>
          </div>
        </div>
        <div id="most-common-workouts"></div>
        <div id="goals"></div>
        <div id="misc-stats"></div>
        <div id="predefined-content"></div>
      </div>
    );
}

export default Profile;