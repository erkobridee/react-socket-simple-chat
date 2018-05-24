import constants from 'chat/constants'

import { settingsKeysMap, SETTINGS_RESTORE } from './types';

//----------------------------------------------------------------------------//

/*
  settings: {
    username: string,
    theme: string,
    clockDisplay: string,
    locale: string
    listenSendKeys: string
  }
*/
const initialState =  constants.defaultSettings;

const getInitialStateFor = stateKey => initialState[stateKey];

const getStateUpdateFor = stateKey => settingsKeysMap[stateKey];

const getReducerFor = stateKey => (state = getInitialStateFor(stateKey), action) => {
  const UPDATE = getStateUpdateFor(stateKey);
  switch( action.type ){
    case UPDATE:
      return action.payload;
    case SETTINGS_RESTORE:
      return getInitialStateFor(stateKey);
    default:
      return state;
  }
};

//----------------------------------------------------------------------------//

export default {
  userName: getReducerFor('userName'),
  theme: getReducerFor('theme'),
  clockDisplay: getReducerFor('clockDisplay'),
  locale: getReducerFor('locale'),
  listenSendKeys: getReducerFor('listenSendKeys')
};
