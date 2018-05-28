import {
  MESSAGE_ADD, MESSAGES_REMOVE, MESSAGES_AWAY
} from './types';

import {
  getInitialState, addMessageToState, setMessagesAwayStatus
} from './utils';

const messages = ( state = getInitialState(), action ) => {
  switch( action.type ) {
    case MESSAGE_ADD:
      return addMessageToState( state, action.payload );
    case MESSAGES_REMOVE:
      return getInitialState();
    case MESSAGES_AWAY:
      return setMessagesAwayStatus( state, action.payload );
    default:
      return state;
  }
}

export default messages;
