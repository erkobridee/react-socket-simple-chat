import { MESSAGE_RECEIVED } from './types';

export const received = ( message ) => {
  return {
    type: MESSAGE_RECEIVED,
    payload: message
  };
}

export default {
  received
};
