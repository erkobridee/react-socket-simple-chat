
const ERROR_PREFIX_MESSAGE = 'LocalStorage service error: ';

const logError = e => console.log( ERROR_PREFIX_MESSAGE, e );

/*
  default error handler assigned to the localstoraged operations

  @param {exception} e
  @param {string|number|object|array|boolean|null} fallbackValue - default: undefined

  @return {string|number|object|array|boolean|null} fallbackValue
*/
const defaultErrorhandler = ( e, fallbackValue = undefined ) => {
  logError( e );
  return fallbackValue;
};

//----------------------------------------------------------------------------//

/*
  from any JS serializeble value to a JSON string

  @param {string|number|object|array|boolean|null} data

  @return {string} data
*/
const serialize = data => JSON.stringify( data );

/*
  from a JSON string to any JS serializeble value

  @param {string} data

  @return {string|number|object|array|boolean|null} data
*/
const deserialize = data => JSON.parse( data );

/*
  load from the localstorage some data by its key

  @param {string} key
  @param {any} fallbackValue = optional
  @param {function} errorHandler - optional

  @return {object} storedData
*/
const loadData = (
  key,
  fallbackValue = undefined,
  errorHandler = defaultErrorhandler
) => {
  try {
    const serializedData = localStorage.getItem( key );
    if( serializedData === null ) {
      return fallbackValue;
    }
    return deserialize( serializedData );
  } catch( e ) {
    return errorHandler( e, fallbackValue );
  }
}

/*
  save on the localstorage a given data by its key

  @param {string} key
  @param {object} data
  @param {function} errorHandler - optional

  @return {boolean} operationStatus
*/
const saveData = (
  key, data,
  errorHandler = defaultErrorhandler
) => {
  try {
    const serializedData = serialize( data );
    localStorage.setItem( key,  serializedData );
    return true;
  } catch( e ) {
    errorHandler( e );
    return false;
  }
};

/*
  remove a stored data by a given key

  @param {string} key
  @param {function} errorHandler - optional

  @return {boolean} operationStatus
*/
const removeData = ( key, errorHandler = defaultErrorhandler ) => {
  try {
    localStorage.removeItem( key );
    return true;
  } catch( e ) {
    errorHandler( e );
    return false;
  }
}

//----------------------------------------------------------------------------//

/*

  Define a localstorage service to be used together with the redux to be able
  to persis the states and when the user refresh/access the app again
  gets the previous data/states

  based on:
  Redux: Persisting the State to the Local Storage | @dan_abramov on @eggheadio
  https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

*/

const DATA_KEY = 'data@app';

// this value will makes to the reduces initialize itselfs
// with its initial defined state
const TO_INITIALIZE = undefined;

/*
  load the previous persisted version of the redux states object

  return {object} state
*/
export const loadState = () => loadData( DATA_KEY, TO_INITIALIZE );

/*
  persists one version pre-defined of the redux states object

  @param {object} state
*/
export const saveState = state => saveData( DATA_KEY, state );

//----------------------------------------------------------------------------//

const VERSION_KEY = 'version@app';

/*
  to avoid possible errors when deploy a new application version
  where could it has changes on the object models of the application

  when versions doesn't match, that will remove the previous storaged data
*/
export const init = ( currentVersion = '0.0.0' ) => {
  const lastVersion = loadData( VERSION_KEY );
  if( !lastVersion ) {
    saveData( VERSION_KEY, currentVersion );
  } else if( lastVersion !== currentVersion ) {
    saveData( VERSION_KEY, currentVersion );
  }
};
