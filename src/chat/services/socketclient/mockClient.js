/*
  define a service that follows the Publish/Subscribe pattern
*/

const eventsMap = {};

const hasEvent = event => event in eventsMap;
const addEvent = event => eventsMap[ event ] = [];
const getEvent = event => eventsMap[ event ];

const hasEventListener = ( event, listener ) => {
  let flag = false;
  if( hasEvent( event ) ) {
    event = getEvent( event );
    flag = ( event.indexOf( listener ) > -1 );
  }
  return flag;
}

//---------------------------------------------------------------------------//

const off = ( event, listener ) => {
  if( hasEvent( event ) ) {
    eventsMap[ event ] = eventsMap[ event ].filter( item => item !== listener );
  }
};

const on = ( event, listener ) => {
  if( !hasEvent( event ) ) addEvent( event );
  if( hasEventListener( event, listener ) ) return; // do not add another listener
  getEvent( event ).push( listener );
  listener.off = function internalOff() {
    off( event, listener );
  }
  return {
    off: listener.off
  };
};

const emit = ( event, data ) => {
  if( hasEvent( event ) ) {
    getEvent( event ).forEach( listener => listener( data ) );
  }
};

export default {
  off, on, emit
};
