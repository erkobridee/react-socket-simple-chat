/*

  Define a localstorage service to be used together with the redux to be able
  to persis the states and when the user refresh/access the app again
  gets the previous data/states

  based on:
  Redux: Persisting the State to the Local Storage | @dan_abramov on @eggheadio
  https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

*/
const key = 'redux@states';

const serialize = (data) => JSON.stringify(data);

const deserialize = (data) => JSON.parse(data);

// this value will makes to the reduces initialize itselfs
// with its initial defined state
const TO_INITIALIZE = undefined;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem( key );
    if( serializedState === null ) {
      return TO_INITIALIZE;
    }
    return deserialize( serializedState );
  } catch( e ) {
    return TO_INITIALIZE;
  }
};

export const saveState = ( state ) => {
  try {
    const serializedState = serialize( state );
    localStorage.setItem( key,  serializedState );
  } catch( e ) {
    // ignore the error
  }
};
