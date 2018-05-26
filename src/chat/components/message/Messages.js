import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import constants from 'chat/constants'

import styles from './stylesClassNames';

import Message from './Message';

class Messages extends PureComponent {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    userName: PropTypes.string.isRequired,
    clockDisplay: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string,
      message: PropTypes.string,
      time: PropTypes.string
    })).isRequired
  }

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: constants.defaultSettings.theme
  }

  // https://reactjs.org/docs/refs-and-the-dom.html
  scrollArea = React.createRef();

  scrollDown = (scroll) => {
    scroll.scrollTop = scroll.scrollHeight;
  }

  componentDidMount() {
    this.scrollDown(this.scrollArea.current);
  }

  componentDidUpdate() {
    this.scrollDown(this.scrollArea.current);
  }

  render() {
    const { theme, userName, clockDisplay, data, className } = this.props;

    const messagesClass = classNames(
      styles.messages,
      className
    );

    return (
      <div
        ref={ this.scrollArea }
        className={ messagesClass }
      >
        {
          data.map( ( message ) => (
            <Message
              key={ message.id }
              theme={ theme }
              data={ message }
              { ...{ userName, clockDisplay } }
            />
          ) )
        }
      </div>
    );
  }
}

export default Messages;
