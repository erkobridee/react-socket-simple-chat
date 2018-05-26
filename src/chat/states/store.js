import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import localStorageService from 'chat/services/localstorage';
import socketClient from 'chat/services/socketclient';

import ducksReducers, {
  selectors as ducksSelectors,
  utils as ducksUtils
} from './ducks';

//----------------------------------------------------------------------------//

// https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
// const socketClient = {
//   todo: 'define the socket.io API',
//   on: () => {},
//   emit: (event, payload) => {
//     console.log(`socket event: ${event} with the payload: `, payload);
//   }
// };

const persistedState = localStorageService.loadState();

//----------------------------------------------------------------------------//

const store = createStore(
  ducksReducers,
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

ducksUtils.listenSocketEvents( socketClient, store.dispatch );

localStorageService.subscribe(
  store.subscribe,
  // defines a callback to get the data which will be persisted
  () => ducksSelectors.getStateToPersist( store.getState() )
);

//----------------------------------------------------------------------------//

export default store;
