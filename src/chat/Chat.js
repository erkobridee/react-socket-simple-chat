import React, { Component } from 'react';

// using HashRouter that will make the routes work 
// over a deployment that hasn't a backend with historyApiFallback support
import { HashRouter } from 'react-router-dom';

import { NavBar } from './containers';
import { Layout, LayoutHeader, LayoutBody } from './components/layout';

import Routes from './Routes';

class Chat extends Component {

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

    return (
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
    );
  }
}

export default Chat;