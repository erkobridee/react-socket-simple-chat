
export const messages = 'messages';

export const message = 'message';
export const messageTo = `${message}--to`;

export const messageContainer = `${message}__container`;
export const messageContainerUser = `${messageContainer}__user`;
export const messageContainerUserTo = `${messageContainerUser}--to`;
export const messageContainerValue = `${messageContainer}__value`;
export const messageContainerValueTo = `${messageContainerValue}--to`;

export const plusTheme = ( className, theme ) => [ 
  className, 
  theme ? `${className}--${theme}` : null 
];

export default {
  plusTheme,

  messages,

  message,
  messageTo,

  messageContainer,
  messageContainerUser,
  messageContainerUserTo,
  messageContainerValue,
  messageContainerValueTo
};