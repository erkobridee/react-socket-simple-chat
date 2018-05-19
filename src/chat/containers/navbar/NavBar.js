import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className={'navbar'}>
        <NavLink 
          exact
          to="/" 
        >
          Chat
        </NavLink>
        <NavLink 
          to="/settings" 
        >
          Settings
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
