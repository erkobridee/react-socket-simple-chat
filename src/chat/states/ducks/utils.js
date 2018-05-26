// utils for all the ducks modules (global utils)

import { operations as messagesOperations } from './messages';

//----------------------------------------------------------------------------//

// https://github.com/socketio/socket.io-client/tree/0.9.16

// https://github.com/socketio/socket.io-client/blob/master/docs/API.md

// code sample to listen socket events
// https://github.com/teropa/redux-voting-client/blob/master/src/index.jsx

export const listenSocketEvents = ( socketClient, storeDispatch ) => {

  // https://socket.io/docs/client-api/
  socketClient.on('message', message => {
    storeDispatch(
      messagesOperations.receive( message )
    );
  });

};

//----------------------------------------------------------------------------//

export default {
  listenSocketEvents
}
