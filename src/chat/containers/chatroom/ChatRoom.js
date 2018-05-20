// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import ChatRoomFooter from './ChatRoomFooter';

import checkIsMobile from 'chat/services/is-mobile';

class ChatRoom extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string, // change to .isRequired
    isMobile: PropTypes.bool
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light', 
    isMobile: checkIsMobile.any()
  };

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
    const { theme, isMobile } = this.props;

    // TODO: define ContainerBody content to display the messages
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