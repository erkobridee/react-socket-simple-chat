import Hashids from 'hashids';

const config = {
  salt: 'chat application hash support',
  minLength: 4
};

const hashids = new Hashids(config.salt, config.minLength);

const isString = ( value ) => (typeof value === 'string');

//----------------------------------------------------------------------------//

export const build = ( value ) => {
  if( !isString(value) ) value = JSON.stringify( value );
  
  const valueLength = value.length;

  let i, charArray = [];
  for( i = 0; i < valueLength; i++ ) {
    charArray.push( value.charCodeAt(i) );
  }

  let hash = hashids.encode( charArray );
  let hashSum = hash.length;
  for( i = (hash.length-1); i >= 0; i-- ) {
    hashSum += hash.charCodeAt( i );
  }

  return {
    input: value, 
    hashSum,
    hash
  };
};

export default build;