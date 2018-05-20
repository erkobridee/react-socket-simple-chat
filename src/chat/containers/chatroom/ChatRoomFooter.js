import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContainerFooter } from 'chat/components/layout';

// TODO: add i18n support

// https://reactjs.org/docs/forms.html
class ChatRoomFooter extends Component {
  
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    listenCtrlEnter: PropTypes.bool
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    listenCtrlEnter: true
  };

  state = {
    message: ''
  };

  // https://reactjs.org/docs/refs-and-the-dom.html
  messageField = React.createRef();

  componentDidMount() {
    this.messageField.current.focus();
  }

  resetMessage = () => {
    this.setState({ message: '' });
  }

  submit = () => {
    if(
      this.props.onSubmit && 
      this.state.message.length > 0
    ){
      this.props.onSubmit(
        this.state.message
      );
      this.resetMessage();
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // https://reactjs.org/docs/events.html#keyboard-events
  handleKeyPress = (event) => {
    if(
      this.props.listenCtrlEnter && 
      event.ctrlKey &&
      event.key === 'Enter'
    ){
      event.preventDefault();
      this.submit();
    }
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    this.submit();
  }

  render() {
    const theme = this.props.theme || 'light';

    const fieldClass = classNames(
      'form-control',
      `form-control--${theme}`
    );

    const buttonClass = classNames(
      'btn',
      `btn--${theme}`,
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