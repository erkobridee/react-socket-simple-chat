// exposes the ducks modules,
// where each module should expose by default its reducer

import { combineReducers } from 'redux';

import connection from './connection';
import messages from './messages';
import settings from './settings';

import selectors from './selectors'
import utils from './utils';

export {
  selectors,
  utils
};

export default combineReducers({
  connection,
  messages,
  ...settings
});
