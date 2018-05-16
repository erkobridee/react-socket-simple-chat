import React, { Component } from 'react';

import styles from './styles.scss';

class Chat extends Component {

  render(){

    return (
      <div className={styles.chat}>
        <h1>My react app running over the webpack 4.</h1>
      </div>
    );
  }
}

export default Chat;