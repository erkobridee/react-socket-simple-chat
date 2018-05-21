import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

// solves the error message
// Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack

class SafeNavLink extends Component {
 
  render() {
    const { 
      children, 
      history, to, 
      className, activeClassName, 
      staticContext, ...rest 
    } = this.props;
    const isActive = (history.location.pathname === to);
    const applyActiveCss = isActive ? (activeClassName || 'active') : null;
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
  }
}

export default withRouter(SafeNavLink);