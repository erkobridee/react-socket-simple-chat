import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import LocalStorageService from 'chat/services/localstorage';

import MessagesUtils from './ducks/messages/utils';
import combinedReducers from './ducks';

//----------------------------------------------------------------------------//

// https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
const socketClient = {
  todo: 'define the socket.io API',
  on: () => {},
  emit: (event, payload) => {
    console.log(`socket event: ${event} with the payload: `, payload);
  }
};

const persistedState = LocalStorageService.loadState();

//----------------------------------------------------------------------------//

const store = createStore(
  combinedReducers,
  persistedState,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ socketClient })
  )
);

// hack to reload the reducer
// IMPORTANT: that won't work to this file, and you'll get an error on the browser console
// https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
if( module.hot ){
  module.hot.accept('./ducks', () => {
    const nextRootReducer = require(`./ducks/index`);
    store.replaceReducer(nextRootReducer);
  });
}

//----------------------------------------------------------------------------//

MessagesUtils.listenSocketEvents( socketClient, store.dispatch );

LocalStorageService.subscribe(
  store.subscribe,
  // defines a callback to get the data which will be persisted
  () => ({
    // TODO: review and update to use selectors
    messages: store.getState().messages,
    userName: store.getState().userName,
    theme: store.getState().theme,
    clockDisplay: store.getState().clockDisplay,
    locale: store.getState().locale,
    listenSendKeys: store.getState().listenSendKeys
  })
);

//----------------------------------------------------------------------------//

export default store;
