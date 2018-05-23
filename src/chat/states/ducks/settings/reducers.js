import types from './types';

const initialState = [];

const settings = (state = initialState, action) => {
  switch( action.type ) {
    case 'DEFINE_TYPES':
      return [ ...state, 'TODO: define' ];
    default:
      return state;
  }
}

export default settings;
