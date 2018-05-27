// container component

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import { SafeNavLink } from 'chat/components/navlink';

import { utils as componentUtils } from 'chat/components';

import { selectors as settingsSelectors } from 'chat/states/ducks/settings';

export class NavBar extends Component {

  // TODO: find a way to define them in the redux state
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
    const { t, theme, locale } = this.props;

    const navbarClass = classNames(
      componentUtils.plusTheme( 'navbar', theme )
    );

    const navbarSupClass = classNames(
      componentUtils.plusTheme( 'navbar__sup', theme )
    );

    return (
      <div className={ navbarClass }>
        <ul>
          <li>
            <SafeNavLink exact to="/">
              { t('chat') }
            </SafeNavLink>
            <div className={ navbarSupClass }>
              <span className="navbar__sup__text">10</span>
            </div>
          </li>
          <li>
            <SafeNavLink exact to="/settings">
              { t('settings') }
            </SafeNavLink>
          </li>
        </ul>
      </div>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  theme: settingsSelectors.getTheme( state ),
  locale: settingsSelectors.getLocale( state )
});

const NavBarRedux = connect(mapStateToProps)(NavBar);

const NavBarRouter = withRouter(NavBarRedux);

const NavBarI18N = translate('navbar')(NavBarRouter);

export default NavBarI18N;
