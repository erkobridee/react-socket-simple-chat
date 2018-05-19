import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {

/*
<div className={navbarClass}>
  <div>
    <NavLink 
      exact
      to="/" 
    >
      Chat
    </NavLink>
    <span className={'navbar__sup'}>???</span>
  </div>

  <NavLink 
    to="/settings" 
  >
    Settings
  </NavLink>
</div>
*/

  render() {
    const theme = this.props.theme || 'light'; 

    const navbarClass = classNames(
      'navbar',
      `navbar--${theme}`
    );

    const navbarSupClass = classNames(
      'navbar__sup',
      `navbar__sup--${theme}`
    );

    return (
      <div className={navbarClass}>
        <ul>
          <li>
            <NavLink 
              exact
              to="/" 
            >
              Chat
            </NavLink>
            <div className={navbarSupClass}>
              <span className={'navbar__sup__text'}>10</span>
            </div>
          </li>
          <li>
            <NavLink 
              to="/settings" 
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
