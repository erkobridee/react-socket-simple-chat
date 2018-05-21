// container component

import React, { Component } from 'react'
import { SafeNavLink } from 'chat/components/navlink';
import classNames from 'classnames';

class NavBar extends Component {

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
            <SafeNavLink exact to="/">
              Chat
            </SafeNavLink>
            <div className={navbarSupClass}>
              <span className="navbar__sup__text">10</span>
            </div>
          </li>
          <li>
            <SafeNavLink exact to="/settings">
              Settings
            </SafeNavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
