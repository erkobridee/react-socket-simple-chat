import { CONNECTION_STATUS_CHANGED } from './types';
import { getInitialState, updateConnection } from './utils';

//----------------------------------------------------------------------------//

const connection = ( state = getInitialState(), action ) => {
  switch( action.type ) {
    case CONNECTION_STATUS_CHANGED:
      return updateConnection( state, action.payload );
    default:
      return state;
  }
}

//----------------------------------------------------------------------------//

export default connection;
