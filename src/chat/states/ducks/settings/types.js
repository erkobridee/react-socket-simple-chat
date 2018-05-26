const namespace = 'settings::';

const updateNamespace = '${namespace}update::';

export const SETTINGS_UPDATE_USERNAME = `${updateNamespace}::update`;
export const SETTINGS_UPDATE_THEME = `${updateNamespace}::theme`;
export const SETTINGS_UPDATE_CLOCK = `${updateNamespace}::clock`;
export const SETTINGS_UPDATE_LOCALE = `${updateNamespace}::locale`;
export const SETTINGS_UPDATE_LISTEN_KEYS = `${updateNamespace}::listenKeys`;

export const SETTINGS_RESTORE = `${namespace}restore`;

export const settingsKeysMap = {
  userName: SETTINGS_UPDATE_USERNAME,
  theme: SETTINGS_UPDATE_THEME,
  clockDisplay: SETTINGS_UPDATE_CLOCK,
  locale: SETTINGS_UPDATE_LOCALE,
  listenSendKeys: SETTINGS_UPDATE_LISTEN_KEYS
};

export default {
  SETTINGS_UPDATE_USERNAME,
  SETTINGS_UPDATE_THEME,
  SETTINGS_UPDATE_CLOCK,
  SETTINGS_UPDATE_LOCALE,
  SETTINGS_UPDATE_LISTEN_KEYS,

  settingsKeysMap,

  SETTINGS_RESTORE
};
