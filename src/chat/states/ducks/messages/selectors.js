
export const getMessages = state => state.messages;

export const getMessagesLength = state => getMessages( state ).length;

export default {
  getMessages,
  getMessagesLength
};
