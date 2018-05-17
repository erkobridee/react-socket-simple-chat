import React, { Component } from 'react';

import styles from './styles.scss';

class Chat extends Component {

  render(){

    return (
      <div className={styles.chat}>
        <h1>React webapp build with the Webpack v4.</h1>
      </div>
    );
  }
}

export default Chat;