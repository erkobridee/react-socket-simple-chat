
/*
  connection = {
    event: string,
    isConnected: boolean
  }
*/
export const getInitialState = () => ({
  event: 'disconnected',
  isConnected: false
});

export const updateConnection = ( state, payload ) => {
  state = { ...payload };
  return state;
};

//----------------------------------------------------------------------------//

export default {
  getInitialState,
  updateConnection
};
