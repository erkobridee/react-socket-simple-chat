import { settingsKeysMap, SETTINGS_RESTORE } from './types';

export const update = ( field, value ) => {
  return {
    type: settingsKeysMap[field],
    payload: value
  };
}

export const restore = () => {
  return {
    type: SETTINGS_RESTORE
  };
}

export default {
  update,
  restore
};
