/*
  this file is used only to configure the react hmr support 
  through the react-hot-loader package
*/
import React from 'react';
import { hot } from 'react-hot-loader';

import Chat from 'chat';

// will be displayed only on the development environment
console.log(process.env.MESSAGE);

export default hot(module)(Chat);