// container component

import React, { Component } from 'react'
import { connect } from 'react-redux';
import classNames from 'classnames';

import { SafeNavLink } from 'chat/components/navlink';

export class NavBar extends Component {

  state = {
    isSettings: false,
    messagesLenghtSnapshot: 0,
    messagesUnreaded: 0
  }

  // TODO: use a local state to check if the user is on the settings page
  /*
      access the messages and read how many are there before
      the user swith to the settings page, and display the
      count of messages received unreaded to diplay

      1. onClick over settings tab
        1. set a flag say it's on the settings tab
        2. access the messages state and take a "snapshot" of the messages length
        3. update the counter with the last messages lenght minus the messagaeLenghtSnapshot
      2. onClick over chat tab
        1. reset the flag
        2. reset the messagesLenghtSnapshot
        3. reset the counter
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

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  settings: state.settings
});

// TODO: check this out
// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
export default connect(mapStateToProps)(NavBar);
