import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { plusTheme } from 'chat/components/utils';

/*
  a common piece of the layout components to define a div with styles
*/
const LayoutPiece = ({ mainClassName, theme, className, children }) => {

  const layoutPieceClass = classNames(
    plusTheme( mainClassName, theme ),
    className
  );

  return (
    <div className={ layoutPieceClass }>
      { children }
    </div>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
LayoutPiece.propTypes = {
  mainClassName: PropTypes.string.isRequired,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default LayoutPiece;
