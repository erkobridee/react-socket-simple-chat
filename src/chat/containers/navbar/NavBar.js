// container component

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import { SafeNavLink } from 'chat/components/navlink';

import { utils as componentUtils } from 'chat/components';

import { selectors as connectionOperations } from 'chat/states/ducks/connection';
import { selectors as settingsSelectors } from 'chat/states/ducks/settings';
import { selectors as messagesSelectors } from 'chat/states/ducks/messages';

/*
  the values needed by the container will be injected on its props

  usage:

  <NavBar />
*/
export class NavBar extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    locale: PropTypes.string,
    unreadedCount: PropTypes.number,
    isConnected: PropTypes.bool,
    t: PropTypes.func.isRequired
  };

  render() {
    const { t, theme, locale, unreadedCount, isConnected } = this.props;

    const navbarClass = classNames(
      componentUtils.plusTheme( 'navbar', theme )
    );

    const navbarSupClass = classNames(
      componentUtils.plusTheme( 'navbar__sup', theme )
    );

    const connectionClass = classNames(
      'fas', ( isConnected ? 'fa-rocket' : 'fa-ban' )
    );

    return (
      <div className={ navbarClass }>
        <ul>
          <li>
            <SafeNavLink exact to="/">
              { t('chat') }
            </SafeNavLink>
            <div className={ navbarSupClass }>
              <span className="navbar__sup__text">
                { unreadedCount > 0 && unreadedCount }
              </span>
            </div>
          </li>
          <li>
            <SafeNavLink exact to="/settings">
              { t('settings') }
            </SafeNavLink>
          </li>

          <li className="navbar__connection">
            {
              isConnected ? t('online') : t('offline')
            } <i className={ connectionClass }></i>
          </li>
        </ul>
      </div>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = state => ({
  theme: settingsSelectors.getTheme( state ),
  locale: settingsSelectors.getLocale( state ),
  unreadedCount: messagesSelectors.getUnreadedCount( state ),
  isConnected: connectionOperations.isConnected( state )
});

const NavBarRedux = connect( mapStateToProps )( NavBar );

const NavBarRouter = withRouter( NavBarRedux );

const NavBarI18N = translate( 'navbar' )( NavBarRouter );

export default NavBarI18N;
