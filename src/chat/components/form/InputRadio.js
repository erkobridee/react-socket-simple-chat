import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputRadio extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    selected: PropTypes.string,
    onChange: PropTypes.func
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light'
  };

  render() {
    const { 
        theme, label, 
        className, 
        value, selected,
        ...rest 
    } = this.props;

    const inputRadioClass = classNames(
      'form-radio',
      `form-radio--${theme}`,
      className
    );

    return (
      <div className={ inputRadioClass }>
        <label>
          <input 
            type="radio" 
            checked={ value === selected }
            { ...{ value, ...rest } }
          />
          { label }
        </label>
      </div>
    );
  }
}

export default InputRadio;