import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {

  render() {
    const navbarClass = classNames(
      'navbar',
      `navbar--${this.props.theme || 'light'}`
    );

    return (
      <div className={navbarClass}>
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
