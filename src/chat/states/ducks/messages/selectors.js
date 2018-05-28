
export const getMessageObject = state => state.messages;

export const getMessages = state => state.messages.list;

export const getMessagesLength = state => getMessages( state ).length;

export const getUnreadCount = state => state.messages.unreadCount;

export default {
  getMessageObject,
  getMessages,
  getMessagesLength,
  getUnreadCount
};
