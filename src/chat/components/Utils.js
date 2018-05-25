/*
  build class names (default and with theme) to be used on classNames()

  @param className string
  @param theme string
*/
export const plusTheme = ( className, theme ) => [
  className,
  theme ? `${className}--${theme}` : null
];

export default {
  plusTheme
};
