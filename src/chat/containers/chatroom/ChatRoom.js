import React, { Component, Fragment } from 'react';
import { ContainerBody, ContainerFooter } from 'chat/containers/layout';

class ChatRoom extends Component {

  render() {

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
                className={'chatroom__field'} 
                placeholder="Enter a message"></input>
            </div>
            <div className={'chatroom__input__submit'}>
              <button className={'btn chatroom__btn'}>send</button>
            </div>
          </div>
        </ContainerFooter>
      </Fragment>
    );
  }
}

export default ChatRoom;