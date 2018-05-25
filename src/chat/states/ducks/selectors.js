// selects through all ducks modules (global selectors)

import { selectors as MessagesSelectors } from './messages';
import { selectors as SettingsSelectors } from './settings';

export const getStateToPersist = state => ({
  messages: MessagesSelectors.getMessages(state),
  ...SettingsSelectors.getSettings(state)
});

export default {
  getStateToPersist
};
