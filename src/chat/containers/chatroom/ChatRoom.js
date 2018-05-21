// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';
import { Messages } from 'chat/components/message';

import ChatRoomFooter from './ChatRoomFooter';

import constants from 'chat/constants'

class ChatRoom extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    isMobile: PropTypes.bool
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light', 
    isMobile: constants.isMobile
  };

  state = {
    messages: [
      { message: 'Hello World', user: 'app', time: 'just now' }
    ]
  };

  handleSubmit = ( message, keyPressed ) => {
    
    message = {
      user: 'Guest0001',
      time: new Date().toISOString(),
      message
    }

    // TODO: remove to use redux to handle the messages data
    this.setState({
      messages: [...this.state.messages, message]
    });

    // TODO: implement the message submit with redux

  }

  render() {
    const { theme, isMobile } = this.props;

    // TODO: define ContainerBody content to display the messages
    return (
      <Fragment>
        
        <ContainerBody>
          <Messages
            userName={ 'Guest0001' }
            clockDisplay={ '12' }
            data={ this.state.messages }
          />
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