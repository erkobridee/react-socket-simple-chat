    // useful reference about how to define input radio
    // http://react.tips/radio-buttons-in-reactjs/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
    usage:

    <InputRadio
      theme={ theme }
      label="Input Radio Label"
      name="sameAttributeNameFromState"
      value="valueAssignedToTheInputRadio"
      selected={ this.state.sameAttributeNameFromState }
      onChange={ this.handleChange }
    />
*/
class InputRadio extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    selected: PropTypes.string,
    onChange: PropTypes.func
  }

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  // static defaultProps = {
  //   theme: 'light'
  // }

  handleClick = (event) => {
    event.preventDefault();
    const { onChange, name, value } = this.props;
    if( onChange ) {
      onChange({ target: { name, value } });
    }
  }

  render() {
    const {
        theme, label,
        className,
        name, value,
        selected,
        ...rest
    } = this.props;

    const inputRadioClass = classNames(
      'form-check',
      `form-check--${theme}`,
      className
    );

    return (
      <div
        className={ inputRadioClass }
        onClick={ this.handleClick  }>
        <input
          className="form-check-input"
          type="radio"
          id={ name }
          checked={ value === selected }
          { ...{ name, value, ...rest } }
        />
        <label
          className="form-check-label"
          htmlFor={ name }>
          { label }
        </label>
      </div>
    );
  }
}

export default InputRadio;
