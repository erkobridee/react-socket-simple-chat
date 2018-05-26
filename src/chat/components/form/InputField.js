import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { utils as componentUtils } from 'chat/components';

/*
  usage:

  <InputField
    theme={ theme }
    type={ 'text' | 'password' }
    name="sameAttributeNameFromObject"
    value={ object.attributeName }
    onChange={ handleChange }
  />
*/
const InputField = ( props ) => {
  const { theme, type, className, ...rest } = props;

  const inputTextClass = classNames(
    componentUtils.plusTheme( 'form-control', theme ),
    className
  );

  return (
    <input
      className={ inputTextClass }
      type={ type }
      { ...rest }
    />
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
InputField.propTypes = {
  theme: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

// https://reactjs.org/docs/react-without-es6.html#declaring-default-props
InputField.defaultProps = {
  type: 'text'
};

export default InputField;
