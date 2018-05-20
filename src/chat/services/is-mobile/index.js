/*
  based on:
  https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
*/

const doCheck = (regexp) => (
  navigator.userAgent.match(regexp) !== null
);

//----------------------------------------------------------------------------//

const Android = () => doCheck(/Android/i);

const BlackBerry = () => doCheck(/BlackBerry/i);

const iOS = () => doCheck(/iPhone|iPad|iPod/i);

const Opera = () => doCheck(/Opera Mini/i);

const Windows = () => doCheck(/IEMobile/i);

const any = () => (
  Android() || BlackBerry() || iOS() || Opera() || Windows()
);

//----------------------------------------------------------------------------//

export default {
  doCheck,
  Android,
  BlackBerry,
  iOS,
  Opera,
  Windows,
  any
};
