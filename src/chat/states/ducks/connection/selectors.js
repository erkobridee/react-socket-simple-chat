
export const getConnectionObject = state => state.connection;

export const getStatus = state => getConnectionObject( state ).status;

export const isConnected = state => getConnectionObject( state ).isConnected;

export default {
  getConnectionObject,
  getStatus,
  isConnected
};
