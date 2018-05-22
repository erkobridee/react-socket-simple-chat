// exposes the ducks modules,
// where each module should expose by default its reducer

import { combineReducers } from 'redux';

import messages from './messages'
import settings from './settings';

export default combineReducers({
  messages,
  settings
});
