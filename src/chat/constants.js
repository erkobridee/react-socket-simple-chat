// import checkIsMobile from 'chat/services/is-mobile';

import { hash, checkIsMobile } from 'chat/services';

//----------------------------------------------------------------------------//

export const isMobile = checkIsMobile.any();

//----------------------------------------------------------------------------//
// default settings

const localTime = new Date().getTime();
const buildUserName = () => ( `Guest_${ hash(localTime).hashSum }` )

export const defaultSettings = {
  userName: buildUserName(),
  theme: process.env.THEME || 'light',
  clockDisplay: process.env.CLOCK_DISPLAY || '12',
  listenSendKeys: process.env.LISTEN_SEND_KEYS || 'off',
  locale: process.env.LOCALE || 'en' // i18n default language  
};

export const keysToListenLabel = isMobile ? 'ENTER' : 'CTRL + ENTER';

//----------------------------------------------------------------------------//

export default {
  isMobile,
  defaultSettings,
  keysToListenLabel
};