import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { ContainerBody, ContainerFooter } from 'chat/containers/layout';

class ChatRoom extends Component {

  render() {
    const fieldClass = classNames(
      'form-control',
      `form-control--${this.props.theme || 'light'}`
    );

    const buttonClass = classNames(
      'btn',
      `btn--${this.props.theme || 'light'}`,
      'chatroom__btn'
    )

    return (
      <Fragment>
        
        <ContainerBody>
          <strong>TODO:</strong> define chat room component
        </ContainerBody>
        
        <ContainerFooter>
          <div className={'chatroom__input'}>
            <div className={'chatroom__input__field'}>
              <input 
                type="text"   
                className={fieldClass} 
                placeholder="Enter a message"></input>
            </div>
            <div className={'chatroom__input__submit'}>
              <button className={buttonClass}>send</button>
            </div>
          </div>
        </ContainerFooter>
      </Fragment>
    );
  }
}

export default ChatRoom;