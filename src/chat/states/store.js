import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import LocalStorageService from 'chat/services/localstorage';

import MessagesUtils from './ducks/messages/utils';
import combinedReducers from './ducks';


// https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
const socketClient = {
  todo: 'define the socket.io API',
  on: () => {}
};

const persistedState = LocalStorageService.loadState();

const store = createStore(
  combinedReducers,
  persistedState,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ socketClient })
  )
);

MessagesUtils.listenSocketEvents( socketClient, store.dispatch );

LocalStorageService.subscribe(
  store.subscribe,
  // defines which data will be persisted
  {
    messages: store.getState().messages
  }
);

export default store;
