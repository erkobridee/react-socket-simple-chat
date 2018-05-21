import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import dayjs from 'dayjs';

import constants from 'chat/constants'

import styles from './stylesClassNames';

class Message extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    userName: PropTypes.string.isRequired,
    clockDisplay: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  }

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light'
  }

  render() {
    const { theme, userName, clockDisplay, data } = this.props;

    const isOtherUser = (userName !== data.user);

    const time = (
      data.time ? 
        dayjs(data.time)
          .format(constants[`timeFormat${clockDisplay}`]) 
        : '' 
    );

    const userInfo = (
      isOtherUser ? `${data.user}, ${time}` : time
    );

    const messageClass = classNames(
      styles.plusTheme( styles.message, theme ),
      { incoming: isOtherUser }
    );

    const containerClass = classNames(
      styles.plusTheme( styles.messageContainer, theme )
    );

    const containerUserClass = classNames(
      styles.plusTheme( styles.messageContainerUser, theme ),
      { incoming: isOtherUser }
    );

    const containerValueClass = classNames(
      styles.plusTheme( styles.messageContainerValue, theme ),
      { incoming: isOtherUser }
    );

    return (
      <div className={ messageClass }>
        <div className={ containerClass }>
          <div className={ containerUserClass }>
            { userInfo }
          </div>
          <div className={ containerValueClass }>
            { data.message }
          </div>
        </div>
      </div>
    );
  }
}

export default Message;