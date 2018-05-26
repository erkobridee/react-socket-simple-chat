import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

/*
  redefines a new NavLink component to solves the error message:
    Warning: Hash history cannot PUSH the same path;
    a new entry will not be added to the history stack

  same usage to the <NavLink>:

  <SafeNavLink></SafeNavLink>

  reference:
    https://reacttraining.com/react-router/web/api/NavLink
*/
export const SafeNavLink = ({
  children,
  history, to,
  className, activeClassName,
  staticContext,
  ...rest
}) => {

  const isActive = ( history.location.pathname === to );
  const applyActiveCss = isActive ? ( activeClassName || 'active' ) : null;

  const applyActiveStyle = {
    cursor: 'default'
  };

  const applyCss = classNames(
    className, applyActiveCss
  );

  return (
    <Fragment>
      {
        isActive ?
          <a className={ applyCss } style={ applyActiveStyle }>{ children }</a> :
          <NavLink className={applyCss} { ...{ to, ...rest } }>{ children }</NavLink>
      }
    </Fragment>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
SafeNavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  history: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
};

// the withRouter wrapper function will provide the same attributes that
// the NavLink has access by default
export default withRouter(SafeNavLink);
