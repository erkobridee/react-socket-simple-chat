import { hash, checkIsMobile, i18n } from 'chat/services';

//----------------------------------------------------------------------------//
// mobile devide check

// should be executed first of all
export const isMobile = checkIsMobile.any();

//----------------------------------------------------------------------------//
// socket server

export const socketURL = ( process.env.SOCKET_SERVER || 'http://localhost:3000' );
export const mockSocket = ( process.env.MOCK_SOCKET === 'true' );

//----------------------------------------------------------------------------//

export const appVersion = ( process.env.APP_VERSION || '0.0.0' );

//----------------------------------------------------------------------------//
// messages

export const welcomeMessage = {
    i18n: 'welcome',
    user: 'App'
};

//----------------------------------------------------------------------------//
// settings

const localTime = new Date().getTime();
const buildUserName = () => ( `Guest_${ hash(localTime).hashSum }` )

/*
  settings = {
    userName: string,
    theme: string,
    clockDisplay: string,
    listenSendKeys: string,
    locale: string
  }
*/
export const defaultSettings = {
  userName: buildUserName(),
  theme: process.env.THEME || 'light',
  clockDisplay: process.env.CLOCK_DISPLAY || '12',
  listenSendKeys: (process.env.LISTEN_SEND_KEYS === 'true'),
  // i18n default language
  locale: (
    // priority to use the browser detected language, followed by fallbacks
    i18n.detectLanguage() || process.env.LOCALE || 'en'
  )
};

export const keysToListenLabel = isMobile ? 'ENTER' : 'CTRL + ENTER';

//----------------------------------------------------------------------------//

export default {
  appVersion,
  socketURL,
  mockSocket,
  isMobile,
  welcomeMessage,
  defaultSettings,
  keysToListenLabel
};
