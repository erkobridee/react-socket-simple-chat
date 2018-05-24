import dayjs from 'dayjs';
import uuidv4 from 'uuid/v4';

import { welcomeMessage } from 'chat/constants';

//----------------------------------------------------------------------------//

export const processMessage = message => ({
  id: uuidv4(),
  time: dayjs().format(),
  ...message
});

export const getInitialMessage = () => processMessage(welcomeMessage);

//----------------------------------------------------------------------------//

// https://github.com/socketio/socket.io-client/tree/0.9.16

// https://github.com/socketio/socket.io-client/blob/master/docs/API.md

// code sample to listen socket events
// https://github.com/teropa/redux-voting-client/blob/master/src/index.jsx

export const listenSocketEvents = ( socketClient, storeDispatch ) => {

  // loaded from actions or operations to dispatch the received message
  const onMessage = () => {};

  // https://socket.io/docs/client-api/
  socketClient.on('message', message => {
    storeDispatch(
      onMessage( message )
    );
  });

};

//----------------------------------------------------------------------------//

export default {
  processMessage,
  getInitialMessage,
  listenSocketEvents
}
