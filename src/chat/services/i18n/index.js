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

import i18n from 'i18next';
import resources from './resources';


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

export const availableLanguages = [
  { key: 'language.english', value: 'en' },
  { key: 'language.portuguese', value: 'pt' },
  { key: 'language.spanish', value: 'es' }
];

export const instance = (
  i18n
    .init({

      // init with the giver resources
      resources,

      lang: detectLanguage(), // default language

      // if there is no language defined to use, here the default one : english
      fallbackLang: 'en',

      // list of namespaces
      ns: [ 'navbar', 'messages', 'settings' ],

      keySeparator: false,

      interpolation: {
        escapeValue: false // because react will handle it
      },

      react: {
        wait: true
      }
    })
);

export const changeLanguage = ( locale ) => {
  if( locale && locale !== instance.language ) {
    instance.changeLanguage( locale );
  }
};

export default {
  detectLanguage,
  availableLanguages,
  instance,
  changeLanguage
};
