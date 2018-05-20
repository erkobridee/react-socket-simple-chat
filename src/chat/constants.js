import checkIsMobile from 'chat/services/is-mobile';

//----------------------------------------------------------------------------//

export const isMobile = checkIsMobile.any();

//----------------------------------------------------------------------------//
// default settings

export const defaultSettings = {
  userName: process.env.USER_NAME || 'Guest0001',
  theme: process.env.THEME || 'light',
  clockDisplay: process.env.CLOCK_DISPLAY || '12',
  listenSendKeys: process.env.LISTEN_SEND_KEYS || 'off',
  locale: process.env.LOCALE || 'en' // i18n default language  
};

export const keysToListenLabel = isMobile ? 'ENTER' : 'CTRL + ENTER';

//----------------------------------------------------------------------------//

const defaultOuput = {
  isMobile,
  defaultSettings,
  keysToListenLabel
};

export default defaultOuput;