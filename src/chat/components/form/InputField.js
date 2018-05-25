import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComponentUtils from 'chat/components/Utils';

/*
  usage:

  <InputField
    theme={ theme }
    type={ 'text' | 'password' }
    name="sameAttributeNameFromState"
    onChange={ this.handleChange }
  />
*/
class InputField extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    type: 'text'
  }

  render() {
    const { theme, type, className, ...rest } = this.props;

    const inputTextClass = classNames(
      ComponentUtils.plusTheme( 'form-control', theme ),
      className
    );

    return (
      <input
        className={ inputTextClass }
        type={ type }
        { ...rest }
      />
    );
  }
}

export default InputField;
