import React,  { Component } from 'react';
import PropTypes from 'prop-types';

/*
  usage:

  <FormGroup
    theme={ theme }
    label="labelToTheField"
  >

    < InputField, InputRadioGroup />

  </FormGroup>
*/
class FormGroup extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  // https://jaketrent.com/post/send-props-to-children-react/
  // https://reactjs.org/docs/react-api.html#reactchildren
  renderChildren = ( theme, children ) => {

    return React.Children.map( children, child => {
      return React.cloneElement( child, {
        theme
      });
    });
  }

  render() {
    const { theme, label, children } = this.props;

    return (
      <div className="form-group">
        <div>{ label }</div>
        { this.renderChildren( theme, children ) }
      </div>
    );
  }
}

export default FormGroup;
