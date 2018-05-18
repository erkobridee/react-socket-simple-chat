import React, { Component, Fragment } from 'react';

// using HashRouter that will make the routes work 
// over a deployment that hasn't a backend with historyApiFallback support
import {
  HashRouter, Route, NavLink
} from 'react-router-dom';

//----------------------------------------------------------------------------//

// TODO: move each component to it own .js file

const ContentLayout = ({ 
  content = <Fragment></Fragment>, 
  footer = <Fragment></Fragment>
}) => (
  <Fragment>
    <div className={'chat__body__content'}>
      {content}
    </div>
    <div className={'chat__body__footer'}>
      {footer}
    </div>
  </Fragment>
);

//---

const ChatRoomContent = () => (
  <Fragment>
    <strong>TODO:</strong> define chat room component
  </Fragment>
);

const ChatRoomFooter = () => (
  <Fragment>
    <div className={'chatroom__input'}>
      <div className={'chatroom__input__field'}>
        <input type="text" placeholder="Enter a message"></input>
      </div>
      <div className={'chatroom__input__submit'}>
        <button>send</button>
      </div>
    </div>
  </Fragment>
); 

const ChatRoom = () => ContentLayout({
  content: ChatRoomContent(),
  footer: ChatRoomFooter()
});


//---

const SettingsContent = () => (
  <Fragment>
    <strong>TODO:</strong> define settings component
  </Fragment>
);

const SettingsFooter = () => (
  <Fragment>
    <button className={'btn-reset'}>Reset to Default</button>
  </Fragment>
);

const Settings = () => ContentLayout({
  content: SettingsContent(),
  footer: SettingsFooter()
});

//---

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