import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import constants from 'chat/constants';

import localStorageService from 'chat/services/localstorage';
import SocketClientService from 'chat/services/socketclient';
import { changeLanguage } from 'chat/services/i18n';

import ducksReducers, {
  selectors as ducksSelectors,
  utils as ducksUtils
} from './ducks';

//----------------------------------------------------------------------------//

/*
  init socket.io client and get its connection to the server
*/
SocketClientService.init( constants );
const socketClient = SocketClientService.getInstance();

/*
  handles the data stored reset when the application version changes
  if that is needed
*/
localStorageService.init( constants.appVersion );

const persistedState = localStorageService.loadState();

// update the usec locale by the i18next from the localstorage
changeLanguage( persistedState && persistedState.locale );

//----------------------------------------------------------------------------//

const store = createStore(
  ducksReducers,
  persistedState,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ socketClient, changeLanguage })
  )
);

// hack to reload the reducer
// IMPORTANT: that won't work to this file, and you'll get an error on the browser console
// https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
if( module.hot ){
  module.hot.accept( () => {
    const nextRootReducer = require(`./ducks/index`);
    store.replaceReducer(nextRootReducer);
  });
}

//----------------------------------------------------------------------------//
// listeners

// listen socket.io event and trigger the needed redux operation
ducksUtils.listenSocketEvents( socketClient, store.dispatch );

// listen the changes on the redux store and persist them on the localstorage
localStorageService.subscribe(
  store.subscribe,
  // defines a callback to get the data which will be persisted
  () => ducksSelectors.getStateToPersist( store.getState() )
);

//----------------------------------------------------------------------------//

export default store;
