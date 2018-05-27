import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import localStorageService from 'chat/services/localstorage';
import socketClient from 'chat/services/socketclient';
import { changeLanguage } from 'chat/services/i18n';

import ducksReducers, {
  selectors as ducksSelectors,
  utils as ducksUtils
} from './ducks';

//----------------------------------------------------------------------------//

const persistedState = localStorageService.loadState();

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
