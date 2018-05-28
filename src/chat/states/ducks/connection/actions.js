import { CONNECTION_STATUS_CHANGED } from './types';

export const setConnectionState = ( status, isConnected ) => ({
  type: CONNECTION_STATUS_CHANGED,
  payload: { status, isConnected }
});

export default {
  setConnectionState
};
