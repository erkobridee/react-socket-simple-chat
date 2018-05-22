import { MESSAGE_RECEIVED } from './types';

export const onMessage = ( message ) => {
  return {
    type: MESSAGE_RECEIVED,
    payload: message
  };
}

export default {
  onMessage
};
