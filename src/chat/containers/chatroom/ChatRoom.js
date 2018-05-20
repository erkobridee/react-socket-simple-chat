import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import ChatRoomFooter from './ChatRoomFooter';

class ChatRoom extends Component {

  handleSubmit = (message) => {
    
    // TODO: remove
    console.log( `submit to the server, message: ${message}` );

    // TODO: implement the message submit

  }

  render() {
    const theme = this.props.theme || 'light';

    return (
      <Fragment>
        
        <ContainerBody>
          <strong>TODO:</strong> define chat room component
        </ContainerBody>
        
        <ChatRoomFooter 
          theme={theme} 
          onSubmit={this.handleSubmit} 
        />
      </Fragment>
    );
  }
}

export default ChatRoom;