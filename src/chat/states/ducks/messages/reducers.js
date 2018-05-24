import { MESSAGE_ADD } from './types';
import { getInitialMessage } from './utils';

const initialState = [
  getInitialMessage()
];

const messages = (state = initialState, action) => {
  switch( action.type ) {
    case MESSAGE_ADD:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export default messages;
