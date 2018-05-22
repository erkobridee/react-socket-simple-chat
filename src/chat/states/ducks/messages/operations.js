import { MESSAGE_SEND } from './types';
import actions from './actions';

export const sendMessage = ( message ) = ( dispatch, getState, api ) => {

  // load userName from the getState().settings.userName

  // send the message api.socketClient.emit('message', message)

  // TODO: return after emit the message
  return {
    type: MESSAGE_SEND,
    payload: message
  };
}

export default {
  ...actions,
  sendMessage
};
