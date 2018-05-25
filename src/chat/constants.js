import { hash, checkIsMobile } from 'chat/services';

//----------------------------------------------------------------------------//
// mobile devide check

export const isMobile = checkIsMobile.any();

//----------------------------------------------------------------------------//
// socket server

export const socketURL = ( process.env.SOCKET_SERVER || 'http://localhost:3001' );
export const mockSocket = ( process.env.MOCK_SOCKET === 'true' );

//----------------------------------------------------------------------------//
// messages

export const welcomeMessage = {
    message: 'Welcome to the simple chat application.',
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
  locale: process.env.LOCALE || 'en' // i18n default language
};

export const keysToListenLabel = isMobile ? 'ENTER' : 'CTRL + ENTER';

export const timeFormat12 = 'hh:mm a (YYYY-MM-DD)';
export const timeFormat24 = 'HH:mm (YYYY-MM-DD)';

//----------------------------------------------------------------------------//

export default {
  isMobile,
  welcomeMessage,
  defaultSettings,
  keysToListenLabel,
  timeFormat12,
  timeFormat24
};
