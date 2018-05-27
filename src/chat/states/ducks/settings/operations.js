import constants from 'chat/constants'

import actions from './actions';

export const update = ( field, value ) => ( dispatch, getState, api ) => {

  if( field === 'locale' ){
    api.changeLanguage( value );
  }

  dispatch( actions.update( field, value ) );
}


export const restore = () => ( dispatch, getState, api ) => {

  dispatch( actions.restore() );

  api.changeLanguage(  constants.defaultSettings.locale );
};


export default {
  update,
  restore
};
