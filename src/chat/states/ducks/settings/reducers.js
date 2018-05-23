import constants from 'chat/constants'

import { SETTINGS_UPDATE, SETTINGS_RESTORE } from './types';

const initialState = () => Object.assign({}, constants.defaultSettings);

const settings = (state = initialState(), action) => {
  switch( action.type ) {
    case SETTINGS_UPDATE:
      return action.payload;
    case SETTINGS_RESTORE:
      return initialState();
    default:
      return state;
  }
}

export default settings;
