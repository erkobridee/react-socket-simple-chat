import React from 'react';
import { Provider } from 'react-redux';
import store from './states';

import Chat from './Chat';

const ChatWithProvider = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default ChatWithProvider;
