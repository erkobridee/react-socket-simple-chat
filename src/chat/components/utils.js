import React from 'react';
import PropTypes from 'prop-types';

//----------------------------------------------------------------------------//

/*
  build class names (default and with theme) to be used on classNames()

  @param {string} className
  @param {string} theme
*/
export const plusTheme = ( className, theme ) => [
  className,
  theme ? `${className}--${theme}` : null
];

//----------------------------------------------------------------------------//

/*
  Defines a custom render, that by default will pass the received
  attributes to the given children object.

  useful references:
    https://jaketrent.com/post/send-props-to-children-react/
    https://reactjs.org/docs/react-api.html#reactchildren
    https://reactjs.org/docs/render-props.html

  @param {element} children
  @param {function} render
  @param {any} ...attributes
*/
export const RenderChildrenWith = ({
  children,
  render = ( child, attributes ) => (
    // default render
    React.cloneElement( child, { ...attributes })
  ),
  ...attributes
}) => (
  React.Children.map( children, child => (
    render( child, { ...attributes })
  ))
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
RenderChildrenWith.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  render: PropTypes.func
};

//----------------------------------------------------------------------------//

export default {
  plusTheme,
  RenderChildrenWith
};
