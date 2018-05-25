import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { utils as componentUtils } from 'chat/components';

/*
  usage:

  <InputRadioGroup
    theme={ theme }
    name="sameAttributeNameFromState"
    selected={ this.state.sameAttributeNameFromState }
    onChange={ this.handleChange }
  >

    <InputRadio
      label="Radio 1"
      value="radio_1"
    />

    <InputRadio
      label="Radio 2"
      value="radio_2"
    />

    ...

  </InputRadioGroup>
*/
class InputRadioGroup extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    name: PropTypes.string.isRequired,
    selected: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  // https://jaketrent.com/post/send-props-to-children-react/
  // https://reactjs.org/docs/react-api.html#reactchildren
  renderChildren = ({ children, theme, name, selected, onChange }) => {

    return React.Children.map( children, child => {
      return React.cloneElement( child, {
        theme, name, selected, onChange
      });
    });
  }

  render() {
    const { theme, className } = this.props;

    const inputRadioGroupClass = classNames(
      componentUtils.plusTheme( 'form-check-group', theme ),
      className
    );

    return (
      <div className={ inputRadioGroupClass }>
        { this.renderChildren( this.props ) }
      </div>
    );
  }
}

export default InputRadioGroup;
