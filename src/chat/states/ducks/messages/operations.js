import actions from './actions';
import { processMessage } from './utils';

export const send = ( message ) => ( dispatch, getState, api ) => {

  message = {
    user: 'DEFINE',
    message
  };

  dispatch( actions.send( message ) );

  api.socketClient.emit( 'message', message );

  // TODO: remove
  dispatch(receive(message));
}

export const receive = ( message ) => ( dispatch, getState, api ) => {

  message = processMessage( message );

  dispatch(actions.add(message));
}

export default {
  actions: {
    ...actions
  },
  send,
  receive
};
