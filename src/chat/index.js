import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

import styles from './styles.scss';

//----------------------------------------------------------------------------//

const ChatRoom = () => (
  <div>TODO: define chat room component</div>
);

const Settings = () => (
  <div>TODO: define settings component</div>
);

const NavBar = () => (
  <div>
    <Link to="/">Chat</Link> | 
    <Link to="/settings">Settings</Link>
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

  render(){

    return (
      <Router>
        <div className={styles.chat}>
          <h1>React webapp build with the Webpack v4.</h1>
          <p><strong>.env message:</strong> {process.env.MESSAGE}</p>
          <br/>
          <NavBar />
          <hr />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default Chat;