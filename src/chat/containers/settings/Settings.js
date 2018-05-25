// container component

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import { FormGroup, InputField, InputRadioGroup, InputRadio } from 'chat/components/form';

import constants from 'chat/constants'

import {
  selectors as SettingsSelectors,
  operations as SettingsOperations
} from 'chat/states/ducks/settings';


// TODO: add i18n support

// https://reactjs.org/docs/forms.html
export class Settings extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string, //.isRequired
  }

  handleResetClick = ( event ) => {
    const { restoreFields } = this.props;
    restoreFields();
  }

  handleChange = ( event ) => {
    const { settings, updateField } = this.props;
    const { name } = event.target;
    let { value } = event.target;

    // map listenSendKeys value to boolean
    if( name === 'listenSendKeys' ) {
      value = ( value === 'on' );
    }

    // only do the updates if the value is different from the previous one
    if( settings[name] !== value ){
      updateField(name, value);
    }
  }

  render() {
    const { theme, settings } = this.props;

    const selectClass = classNames(
      'form-select',
      `form-select--${theme}`
    );

    const buttonClass = classNames(
      'btn',
      `btn--${theme}`,
      'btn--expand'
    );

    return (
      <Fragment>

        <ContainerBody theme={ theme }>
          <div className="settings__body">

            <FormGroup
              theme={ theme }
              label={ 'User Name' }>
              <InputField
                name="userName"
                value={ settings.userName }
                onChange={ this.handleChange }
              />
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={ 'Interface color' }>
              <InputRadioGroup
                name="theme"
                selected={ settings.theme }
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
                selected={ settings.clockDisplay }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ '12 Hours' }
                  value="12"
                />
                <InputRadio
                  label={ '24 Hours' }
                  value="24"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={ `Send messages on ${ constants.keysToListenLabel }` }>
              <InputRadioGroup
                name="listenSendKeys"
                selected={ settings.listenSendKeys ? 'on' : 'off' }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ 'On' }
                  value="on"
                />
                <InputRadio
                  label={ 'Off' }
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
                  value={ settings.locale }
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

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  settings: SettingsSelectors.getSettings( state ),
  theme: SettingsSelectors.getTheme( state )
});

// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
const mapDispatchToProps = {
  updateField: SettingsOperations.update,
  restoreFields: SettingsOperations.restore
}

const SettingsReduxConnected = connect(mapStateToProps, mapDispatchToProps)(Settings);

// https://reacttraining.com/react-router/web/guides/redux-integration
const SettingsReduxWithRouter = withRouter(SettingsReduxConnected);

export default SettingsReduxWithRouter;
