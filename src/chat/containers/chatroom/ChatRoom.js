import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import ChatRoomFooter from './ChatRoomFooter';

import checkIsMobile from 'chat/services/is-mobile';
const isMobile = checkIsMobile.any();

class ChatRoom extends Component {

  state = {
    message: '',
    keyPressed: ''
  };

  handleSubmit = (message, keyPressed) => {
    
    this.setState({
      message: message,
      keyPressed: (
        keyPressed ?
        [
          `key: ${keyPressed.key}`,
          `ctrl: ${keyPressed.ctrlKey}`,
          `shift: ${keyPressed.shiftKey}`,
          `alt: ${keyPressed.altKey}`
        ].join(' | ') : 'button clicked'
      )
    });

    // TODO: implement the message submit

  }

  render() {
    const theme = this.props.theme || 'light';

    return (
      <Fragment>
        
        <ContainerBody>
          <div>
            <strong>TODO:</strong> define chat room component
          </div>
          <div>
            message: { this.state.message }
          </div>
          <div>
            keyPressed: { this.state.keyPressed }
          </div>
          <div>
            isMobile: { `${isMobile}` }
          </div>
        </ContainerBody>
        
        <ChatRoomFooter 
          theme={theme}
          onSubmit={ this.handleSubmit }
          listenSendKeys={ true /* load from the settings storage */ }
          isMobile={ isMobile }
        />
      </Fragment>
    );
  }
}

export default ChatRoom;