import { SETTINGS_UPDATE, SETTINGS_RESTORE } from './types';

export const update = ( settings ) => {
  return {
    type: SETTINGS_UPDATE,
    payload: settings
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
