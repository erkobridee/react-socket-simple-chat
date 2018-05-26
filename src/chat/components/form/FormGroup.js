import React from 'react';
import PropTypes from 'prop-types';

import { RenderChildrenWith } from 'chat/components/utils'

/*
  usage:

  <FormGroup
    theme={ theme }
    label="labelToTheField"
  >

    < InputField, InputRadioGroup />

  </FormGroup>
*/
const FormGroup = ({ theme, label, children }) => (
  <div className="form-group">
    <div>{ label }</div>
    <RenderChildrenWith { ...{ children, theme } } />
  </div>
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
FormGroup.propTypes = {
  theme: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default FormGroup;
