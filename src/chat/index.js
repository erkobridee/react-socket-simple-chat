import React, { Component, Fragment } from 'react';

// using HashRouter that will make the routes work 
// over a deployment that hasn't a backend with historyApiFallback support
import {
  HashRouter, Route, NavLink
} from 'react-router-dom';

//----------------------------------------------------------------------------//

// TODO: move each component to it own .js file

const ChatRoom = () => (
  <Fragment>
    <div className={'chat__body__content'}>
      <strong>TODO:</strong> define chat room component
    </div>
    <div className={'chat__body__footer'}>
      <div className={'chatroom__input'}>
        <div className={'chatroom__input__field'}>
          <input type="text" placeholder="Enter a message"></input>
        </div>
        <div className={'chatroom__input__submit'}>
          <button>send</button>
        </div>
      </div>
    </div>
  </Fragment>
);

const Settings = () => (
  <Fragment>
    <div className={'chat__body__content'}>
      <strong>TODO:</strong> define settings component
    </div>
    <div className={'chat__body__footer'}>
      <button className={'btn-reset'}>Reset to Default</button>
    </div>
  </Fragment>
);

const NavBar = () => (
  <div className={'navbar'}>
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

const Routes = () => (
  <div className={'chat__body'}>
    <Route exact path="/" component={ChatRoom} />
    <Route path="/settings" component={Settings} />
  </div>
);

//----------------------------------------------------------------------------//

class Chat extends Component {

  render(){
    return (
      <HashRouter>
        <div className={'chat'}>

          <div className={'chat__header'}>
            <NavBar />
          </div>
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default Chat;