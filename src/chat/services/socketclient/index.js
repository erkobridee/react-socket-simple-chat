import io from 'socket.io-client';

import mockClient from './mockClient';

const getSocketClient = socketURL => {
  let client;
  if( typeof WebSocket === 'function' ) {
    client = io.connect( socketURL );
  } else {
    client = io(socketURL);
  }
  return client;
}

let instance;
export const init = ({ mockSocket, socketURL }) => {
  instance =  mockSocket ? mockClient : getSocketClient( socketURL );
  return instance;
};

export const getInstance = () => instance;

export default {
  init,
  getInstance
};
