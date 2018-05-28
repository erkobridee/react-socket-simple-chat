// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import dayjs from 'dayjs';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';
import { Messages } from 'chat/components/message';

import ChatRoomFooter from './ChatRoomFooter';

import constants from 'chat/constants'

import {
  operations as messagesOperations,
  selectors as messagesSelectors
} from 'chat/states/ducks/messages';
import { selectors as settingsSelectors } from 'chat/states/ducks/settings';


export class ChatRoom extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    userName: PropTypes.string,
    clockDisplay: PropTypes.string,
    listenSendKeys: PropTypes.bool,
    isMobile: PropTypes.bool,
    t: PropTypes.func.isRequired
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    isMobile: constants.isMobile
  };

  handleSubmit = message => {
    const { sendMessage, userName } = this.props;
    sendMessage( message, userName );
  }

  componentDidMount() {
    const { setAwayFromMessages } = this.props;
    setAwayFromMessages( false );
  }

  componentWillUnmount() {
    const { setAwayFromMessages } = this.props;
    setAwayFromMessages( true );
  }

  render() {
    const {
      t,
      isMobile,
      userName, theme, clockDisplay, listenSendKeys,
      messages
    } = this.props;

    return (
      <Fragment>

        <ContainerBody
          className="chatroom enable-scroll reverse-items"
          theme={ theme }>
          <Messages
            theme={ theme }
            userName={ userName }
            clockDisplay={ clockDisplay }
            data={ messages }
            t={ t }
          />
        </ContainerBody>

        <ChatRoomFooter
          theme={ theme }
          onSubmit={ this.handleSubmit }
          listenSendKeys={ listenSendKeys }
          isMobile={ isMobile }
          t={ t }
        />
      </Fragment>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = state => ({
  messages: messagesSelectors.getMessages( state ),
  userName: settingsSelectors.getUserName( state ),
  theme: settingsSelectors.getTheme( state ),
  clockDisplay: settingsSelectors.getClockDisplay( state ),
  listenSendKeys: settingsSelectors.getListenSendKeys( state )
});

// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
const mapDispatchToProps = {
  sendMessage: messagesOperations.send,
  setAwayFromMessages: messagesOperations.setAway
}

const ChatRoomRedux = connect( mapStateToProps, mapDispatchToProps )( ChatRoom );

// https://reacttraining.com/react-router/web/guides/redux-integration
const ChatRoomRouter = withRouter( ChatRoomRedux );

const ChatRoomI18N = translate( 'messages' )( ChatRoomRouter );

export default ChatRoomI18N;
