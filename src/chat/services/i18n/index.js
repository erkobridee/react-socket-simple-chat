/*
  useful references:

  i18next documentation
  https://www.i18next.com/

  formattings | i18next documentation
  https://www.i18next.com/translation-function/formatting

  I18n with React and i18next | Alligator.io
  https://alligator.io/react/i18n-with-react-and-i18next

  Sandbox Editor - react + i18n
  https://codesandbox.io/s/l4qrory2nl
*/

import i18next from 'i18next';
import resources from './resources';

//----------------------------------------------------------------------------//

// read from the web browser which is the used language
export const detectLanguage = () => {
  let lang = (
    navigator.languages
      ? navigator.languages[0]
      : (navigator.language || navigator.userLanguage)
  );

  if( lang.indexOf( '-' ) !== -1 ) {
    lang = lang.split( '-' )[0];
  }

  if( lang.indexOf( '_' ) !== -1 ) {
    lang = lang.split( '_' )[0];
  }

  return lang;
};

// to be used on the settings page at the language selection
export const availableLanguages = [
  { key: 'language.english', value: 'en' },
  { key: 'language.portuguese', value: 'pt' },
  { key: 'language.spanish', value: 'es' }
];

// i18next config and initialization
export const instance = (
  i18next.init({

    // init with the given resources
    resources,

    lng: detectLanguage(), // use the web browser default language

    // if there is no language defined to use, here the default one : english
    fallbackLng: 'en',

    // list of namespaces
    ns: [ 'navbar', 'messages', 'settings' ],

    // allows keys defined like "key.name" at the `.json` files
    // under the resouces directory
    keySeparator: false,

    interpolation: {
      escapeValue: false // because react will handle it
    },

    react: {
      wait: true
    },

    debug: false
  })
);

/*
  safe way to change the language used by the i18next instance

  @param {string} locale
*/
export const changeLanguage = ( locale ) => {
  if( locale && locale !== instance.language ) {
    instance.changeLanguage( locale );
  }
};

//----------------------------------------------------------------------------//

export default {
  detectLanguage,
  availableLanguages,
  instance,
  changeLanguage
};
