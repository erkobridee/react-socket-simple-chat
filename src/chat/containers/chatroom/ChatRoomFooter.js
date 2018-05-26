// presentation component

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContainerFooter } from 'chat/components/layout';

import { utils as componentUtils } from 'chat/components';

import constants from 'chat/constants'

// TODO: add i18n support

// https://reactjs.org/docs/forms.html
class ChatRoomFooter extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    listenSendKeys: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    isMobile: constants.isMobile
  };

  state = {
    message: ''
  };

  // https://reactjs.org/docs/refs-and-the-dom.html
  messageField = React.createRef();

  setFieldFocus = () => {
    this.messageField.current.focus();
  };

  componentDidMount() {
    // this.messageField.current.focus();
    this.setFieldFocus();
  }

  resetMessage = () => {
    this.setState({ message: '' });
  }

  submit = ( event ) => {
    if( event ) event.preventDefault();

    if(
      this.props.onSubmit &&
      this.state.message.length > 0
    ){
      this.props.onSubmit(
        this.state.message
      );
      this.resetMessage();
      this.setFieldFocus();
    }
  }

  handleChange = ( event ) => {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }

  // https://reactjs.org/docs/events.html#keyboard-events
  handleKeyPress = ( event ) => {
    const { listenSendKeys, isMobile } = this.props;
    if(
      listenSendKeys &&
      (
        // when its running under the mobile web browser
        // only check the enter key
        isMobile || event.ctrlKey
      ) &&
      event.key === 'Enter'
    ){
      this.submit( event );
    }
  }

  handleButtonClick = ( event ) => {
    this.submit( event );
  }

  render() {
    const { theme } = this.props;

    const fieldClass = classNames(
      componentUtils.plusTheme( 'form-control', theme )
    );

    const buttonClass = classNames(
      componentUtils.plusTheme( 'btn', theme ),
      'chatroom__btn'
    )

    return (
      <ContainerFooter>
        <div className={ 'chatroom__input' }>
          <div className={ 'chatroom__input__field' }>
            <input
              ref={ this.messageField }
              type="text"
              name="message"
              className={ fieldClass }
              placeholder={ 'Enter a message' /* TODO: use i18n support */ }
              value={ this.state.message }
              onChange={ this.handleChange }
              onKeyPress={ this.handleKeyPress }></input>
          </div>
          <div className={ 'chatroom__input__submit' }>
            <button
              className={ buttonClass }
              title={ 'send' /* TODO: use i18n support */  }
              onClick={ this.handleButtonClick }>
              <i className="fas fa-paper-plane fa-fw"></i>
            </button>
          </div>
        </div>
      </ContainerFooter>
    );
  }
}

export default ChatRoomFooter;
