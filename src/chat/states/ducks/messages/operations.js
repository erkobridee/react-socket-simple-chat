import actions from './actions';
import { processMessage } from './utils';

export const send = ( message, user ) => ( dispatch, getState, api ) => {

  message = { user, message };

  dispatch( actions.send( message ) );

  api.socketClient.emit( 'message', message );
}

export const receive = ( message ) => ( dispatch, getState, api ) => {

  message = processMessage( message );

  dispatch(actions.add(message));
}

export const remove = () => ( dispatch, getState, api ) => {

  dispatch( actions.remove() );
}

export default {
  send,
  receive,
  remove
};
