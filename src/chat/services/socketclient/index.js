import io from 'socket.io-client';

import { mockSocket, socketURL } from 'chat/constants';
import mockClient from './mockClient';

const getSocketClient = () => {
  let client;
  if( typeof WebSocket === 'function' ) {
    client = io.connect( socketURL );
  } else {
    client = io(socketURL);
  }
  return client;
}

const client = mockSocket ? mockClient : getSocketClient();

export default client;
