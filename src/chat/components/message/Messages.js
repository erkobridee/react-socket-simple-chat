import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './stylesClassNames';

import Message from './Message';

class Messages extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    userName: PropTypes.string.isRequired,
    clockDisplay: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
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
    const { userName, clockDisplay, data, className } = this.props;

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
          data.map( ( message, key ) => (
            <Message 
              theme={ 'light' }
              data={ message }
              { ...{ key, userName, clockDisplay } }
            />
          ) ) 
        }
      </div>
    );
  }
}

export default Messages;