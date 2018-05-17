import React, { Component } from 'react';

// using HashRouter that will make the routes work 
// over a deployment that hasn't a backend with historyApiFallback support
import {
  HashRouter, Route, NavLink
} from 'react-router-dom';

import styles from './styles.scss';

//----------------------------------------------------------------------------//

// TODO: move each component to it own .js file

const ChatRoom = () => (
  <div>
    <br/>
    <strong>TODO:</strong> define chat room component
  </div>
);

const Settings = () => (
  <div>
    <br/>
    <strong>TODO:</strong> define settings component
  </div>
);

const NavBar = () => (
  <div>
    <NavLink 
      to="/" 
    >
      Chat
    </NavLink> | 
    <NavLink 
      to="/settings" 
    >
      Settings
    </NavLink>
  </div>
);

const Routes = () => (
  <div>
    <Route exact path="/" component={ChatRoom} />
    <Route path="/settings" component={Settings} />
  </div>
);

//----------------------------------------------------------------------------//

class Chat extends Component {

  // TODO: define chat application layout

  render(){

    return (
      <HashRouter>
        <div className={styles.chat}>
          <h1>React webapp build with the Webpack v4.</h1>
          <p><strong>.env message:</strong> {process.env.MESSAGE}</p>
          <br/>
          <NavBar />
          <hr />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default Chat;