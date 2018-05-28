import {
  MESSAGE_SEND, MESSAGE_RECEIVE, MESSAGE_ADD,
  MESSAGES_REMOVE, MESSAGES_AWAY
} from './types';

//----------------------------------------------------------------------------//

export const send = message => ({
  type: MESSAGE_SEND,
  payload: message
});

export const receive = message => ({
  type: MESSAGE_RECEIVE,
  payload: message
});


export const add = message => ({
  type: MESSAGE_ADD,
  payload: message
});

export const remove = () => ({
  type: MESSAGES_REMOVE
});

export const setAway = flag => ({
  type: MESSAGES_AWAY,
  payload: flag
});

//----------------------------------------------------------------------------//

export default {
  send,
  receive,
  add,
  remove,
  setAway
};
