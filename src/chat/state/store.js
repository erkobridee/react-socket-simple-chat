import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import combinedReducers from './ducks';

import MessagesUtils from './messages/utils';

// https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
const socketClient = {
  todo: 'define the socket.io API'
};

const localstorage = {
  todo: 'define the socket.io API'
}

const store = createStore(
  combinedReducers,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({
      API: { socketClient, localstorage }
    })
  )
);

MessagesUtils.listenSocketEvents( socketClient, store.dispatch );

export default store;
