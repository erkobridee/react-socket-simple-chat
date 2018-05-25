import React, { Component } from 'react';
import { connect } from 'react-redux';

// using HashRouter that will make the routes work
// over a deployment that hasn't a backend with historyApiFallback support
import { HashRouter } from 'react-router-dom';

import { Layout, LayoutHeader, LayoutBody } from './components/layout';

import { NavBar } from './containers';
import Routes from './Routes';

import {
  selectors as SettingsSelectors
} from 'chat/states/ducks/settings';


export class Chat extends Component {

  render() {

  /*
    <HashRouter>
      <Layout>
        <LayoutHeader>
          <NavBar />
        </LayoutHeader>
        <LayoutBody>
          <Routes />
        </LayoutBody>
      </Layout>
    </HashRouter>
  */

    const { theme } = this.props;

    return (
      <HashRouter>
        <Layout theme={ theme }>
          <LayoutHeader theme={ theme }>
            <NavBar />
          </LayoutHeader>
          <LayoutBody theme={ theme }>
            <Routes />
          </LayoutBody>
        </Layout>
      </HashRouter>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  theme: SettingsSelectors.getTheme( state )
});

const ChatReduxConnected = connect(mapStateToProps)(Chat);

export default ChatReduxConnected;
