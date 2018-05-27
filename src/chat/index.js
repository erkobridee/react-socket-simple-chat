import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from './services/i18n';
import store from './states';

import Chat from './Chat';

const ChatWithProviders = () => (
  <I18nextProvider i18n={i18n.instance}>
    <ReduxProvider store={store}>
      <Chat />
    </ReduxProvider>
  </I18nextProvider>
);

export default ChatWithProviders;
