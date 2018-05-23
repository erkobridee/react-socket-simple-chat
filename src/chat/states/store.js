import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import LocalStorageService from 'chat/services/localstorage';

import combinedReducers from './ducks';

import MessagesUtils from './messages/utils';


// https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
const socketClient = {
  todo: 'define the socket.io API'
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
