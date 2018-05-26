import {
  MESSAGE_SEND, MESSAGE_RECEIVE, MESSAGE_ADD,
  MESSAGES_REMOVE
} from './types';

export const send = ( message ) => {
  return {
    type: MESSAGE_SEND,
    payload: message
  };
}

export const receive = ( message ) => {
  return {
    type: MESSAGE_RECEIVE,
    payload: message
  };
}

export const add = ( message ) => {
  return {
    type: MESSAGE_ADD,
    payload: message
  };
}

export const remove = () => {
  return {
    type: MESSAGES_REMOVE
  }
}

export default {
  send,
  receive,
  add,
  remove
};
