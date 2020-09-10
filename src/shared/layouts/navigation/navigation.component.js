import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import './navigation.styles.scss';
import Profile from '../../../profile/profile.component';

function Navigation() {
    return (
      <div>
        <div id="routing">
          <Switch>
            <Route path="/feed">// Put feed component here.</Route>
            <Route path="/explore">// Put explore component here.</Route>
            <Route path="/record">// Put record component here.</Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/training">// Put training component here.</Route>
          </Switch>
        </div>
        <div className="navbar">
          <div className="feed nav-items">
            <Link to="/feed">Feed</Link>
          </div>
          <div className="explore nav-items">
            <Link to="/explore">Explore</Link>
          </div>
          <div className="record nav-items">
            <Link to="/record">Record</Link>
          </div>
          <div className="profile nav-items">
            <Link to="/profile">Profile</Link>
          </div>
          <div className="training nav-items">
            <Link to="/training">Training</Link>
          </div>
        </div>
      </div>
    );
}

export default Navigation;