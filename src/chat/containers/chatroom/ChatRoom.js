// container component

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import dayjs from 'dayjs';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';
import { Messages } from 'chat/components/message';

import ChatRoomFooter from './ChatRoomFooter';

import constants from 'chat/constants'

import { operations } from 'chat/states/ducks/messages';

export class ChatRoom extends Component {

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
      {
        message: 'Welcome to the simple chat application.',
        user: 'App',
        time: dayjs().format()
      }
    ]
  };

  handleSubmit = ( message, keyPressed ) => {

    // message = {
    //   user: 'Guest0001',
    //   time: dayjs().format(),
    //   message
    // }

    // TODO: remove to use redux to handle the messages data
    // this.setState({
    //   messages: [...this.state.messages, message]
    // });

    // TODO: implement the message submit with redux

    this.props.sendMessage( message );

  }

  render() {
    const { theme, isMobile, messages } = this.props;

    return (
      <Fragment>

        <ContainerBody className="chatroom">
          <Messages
            theme={ theme }
            userName={ 'Guest0001' }
            clockDisplay={ '12' }
            data={ messages }
          />
        </ContainerBody>

        <ChatRoomFooter
          theme={ theme }
          onSubmit={ this.handleSubmit }
          listenSendKeys={ true /* load from the settings storage */ }
          isMobile={ isMobile }
        />
      </Fragment>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  messages: state.messages
});

// const mapDispatchToProps = ( dispatch ) => ({
//   sendMessage( message ) {
//     dispatch( operations.send )
//   }
// });

// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
const mapDispatchToProps = {
  sendMessage: operations.send
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
