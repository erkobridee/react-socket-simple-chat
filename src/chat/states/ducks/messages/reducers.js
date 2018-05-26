import { MESSAGE_ADD, MESSAGES_REMOVE } from './types';
import { getInitialMessage } from './utils';

const initialState = [
  getInitialMessage()
];

const messages = (state = initialState, action) => {
  switch( action.type ) {
    case MESSAGE_ADD:
      return [ ...state, action.payload ];
    case MESSAGES_REMOVE:
      return initialState;
    default:
      return state;
  }
}

export default messages;
