import { MESSAGE_LOAD, MESSAGE_RECEIVED } from './types';

const initialState = [];

const messages = (state = initialState, action) => {
  switch( action.type ) {
    case MESSAGE_RECEIVED:
      return [ ...state, action.payload ];
    case MESSAGE_LOAD:
    default:
      return state;
  }
}

export default messages;
