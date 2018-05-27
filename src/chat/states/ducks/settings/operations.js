import actions from './actions';

export const update = ( field, value ) => ( dispatch, getState, api ) => {

  if( field === 'locale' ){
    api.changeLanguage( value );
  }

  dispatch( actions.update( field, value ) );
}

export const restore = actions.restore;

export default {
  update,
  restore
};
