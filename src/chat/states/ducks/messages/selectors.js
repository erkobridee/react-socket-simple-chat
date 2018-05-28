
export const getMessageObject = state => state.messages;

export const getMessages = state => state.messages.list;

export const getMessagesLength = state => getMessages( state ).length;

export const getUnreadedCount = state => state.messages.unreadedCount;

export default {
  getMessageObject,
  getMessages,
  getMessagesLength,
  getUnreadedCount
};
