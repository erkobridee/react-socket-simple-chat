// exposes the ducks modules,
// where each module should expose by default its reducer

import { combineReducers } from 'redux';

import messages from './messages'
import settings from './settings';

import selectors from './selectors'
import utils from './utils';

export {
  selectors,
  utils
};

export default combineReducers({
  messages,
  ...settings
});
