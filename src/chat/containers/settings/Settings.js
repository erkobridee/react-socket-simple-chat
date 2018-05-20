// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import { FormGroup, InputField, InputRadioGroup, InputRadio } from 'chat/components/form';

import constants from 'chat/constants'

// TODO: add i18n support

// https://reactjs.org/docs/forms.html
class Settings extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string.isRequired,
    isMobile: PropTypes.bool
  }

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light',
    isMobile: constants.isMobile
  }

  state = Object.assign({}, constants.defaultSettings);

  handleResetClick = ( event ) => {
    
    // TODO: remove
    console.log( 'Settings: clicked on reset to default button' );

    this.setState(Object.assign({}, constants.defaultSettings));

    // TODO: trigger events
  }

  handleChange = ( event ) => {
    const { name, value } = event.target;

    // TODO: remove
    console.log( `Settings: radio ${name} changed, new value ${value}` );

    this.setState({
      [name]: value
    });

    // TODO: trigger events
  }

  render() {
    const { theme, isMobile } = this.props;
    
    const selectClass = classNames(
      'form-select',
      `form-select--${theme}`
    );

    const buttonClass = classNames(
      'btn', 'btn-expand',
      `btn--${theme}`
    );

    return (
      <Fragment>
        
        <ContainerBody>
          <div className="settings__body">

            <FormGroup
              theme={ theme } 
              label={ 'User Name' }>
              <InputField 
                name="userName"
                value={ this.state.userName }
                onChange={ this.handleChange }
              />
            </FormGroup>

            <FormGroup
              theme={ theme } 
              label={ 'Interface color' }>  
              <InputRadioGroup 
                name="theme"
                selected={ this.state.theme } 
                onChange={ this.handleChange }>
                <InputRadio 
                  label="Light" 
                  value="light"
                />
                <InputRadio 
                  label="Dark" 
                  value="dark"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme } 
              label={ 'Clock display' }>  
              <InputRadioGroup 
                name="clockDisplay"
                selected={ this.state.clockDisplay } 
                onChange={ this.handleChange }>
                <InputRadio 
                  label="12 Hours" 
                  value="12"
                />
                <InputRadio 
                  label="24 Hours" 
                  value="24"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme } 
              label={ `Send messages on ${ constants.keysToListenLabel /*isMobile ? 'ENTER' : 'CTRL + ENTER'*/ }` }>  
              <InputRadioGroup 
                name="listenSendKeys"
                selected={ this.state.listenSendKeys } 
                onChange={ this.handleChange }>
                <InputRadio 
                  label="On" 
                  value="on"
                />
                <InputRadio 
                  label="Off" 
                  value="off"
                />
              </InputRadioGroup>
            </FormGroup>

            <div>
              <div>Language</div>
              <div>
                <select 
                  name="locale" 
                  className={ selectClass }
                  value={ this.state.locale } 
                  onChange={ this.handleChange }>
                  <option value="en">English</option>
                  <option value="pt">Portuguese</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </ContainerBody>
        
        <ContainerFooter>
          <button 
            className={ buttonClass }
            onClick={ this.handleResetClick }>
            <i className="fas fa-undo fa-fw"></i> Reset to Default
          </button>
        </ContainerFooter>
      </Fragment>
    );
  }
}

export default Settings;