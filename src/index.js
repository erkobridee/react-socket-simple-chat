import React from 'react';
import ReactDOM from 'react-dom';

import styles from 'styles/main.scss';

import App from 'app';

console.log(process.env);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);