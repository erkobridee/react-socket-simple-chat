/*
  settings: {
    username: string,
    theme: string,
    clockDisplay: string,
    locale: string
    listenSendKeys: string
  }
*/
export const getSettings = state => ({
  userName: state.userName,
  theme: state.theme,
  clockDisplay: state.clockDisplay,
  locale: state.locale,
  listenSendKeys: state.listenSendKeys
});

export const getUserName = state => state.userName;
export const getTheme = state => state.theme;
export const getClockDisplay = state => state.clockDisplay;
export const getLocale = state => state.locale;
export const getListenSendKeys = state => state.listenSendKeys;

export default {
  getSettings,
  getUserName,
  getTheme,
  getClockDisplay,
  getLocale,
  getListenSendKeys
};
