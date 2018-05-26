import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { plusTheme, RenderChildrenWith } from 'chat/components/utils';

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
const InputRadioGroup = ({
  children,
  theme, className,
  name, selected, onChange
}) => {

  const inputRadioGroupClass = classNames(
    plusTheme( 'form-check-group', theme ),
    className
  );

  return (
    <div className={ inputRadioGroupClass }>
      <RenderChildrenWith { ...{ children, theme, name, selected, onChange } } />
    </div>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
InputRadioGroup.propTypes = {
  theme: PropTypes.string,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default InputRadioGroup;
