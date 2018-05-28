import dayjs from 'dayjs';
import uuidv4 from 'uuid/v4';

import { welcomeMessage } from 'chat/constants';

//----------------------------------------------------------------------------//

export const processMessage = message => ({
  id: uuidv4(),
  time: dayjs().format(),
  ...message
});

export const getInitialMessage = () => processMessage( welcomeMessage );

export const getInitialState = () => ({
  list: [getInitialMessage()],
  isAway: false,
  unreadedCount: 0
});

export const addMessageToState = ( state, message ) => {
  state = { ...state }; //clone
  if( state.isAway ) {
    state.unreadedCount = (state.unreadedCount + 1);
  }
  state.list = [ ...state.list, message ];
  return state;
};

export const setMessagesAwayStatus = ( state, status ) => {
  state = { ...state }; // clone
  state.isAway = status;
  if( !state.isAway ) {
    state.unreadedCount = 0;
  }
  return state;
};

//----------------------------------------------------------------------------//

export default {
  processMessage,
  getInitialMessage,
  addMessageToState,
  setMessagesAwayStatus
}
