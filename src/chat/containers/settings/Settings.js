// container component

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import { FormGroup, InputField, InputRadioGroup, InputRadio } from 'chat/components/form';

import ComponentUtils from 'chat/components/Utils';

import constants from 'chat/constants'

import {
  selectors as settingsSelectors,
  operations as settingsOperations
} from 'chat/states/ducks/settings';


// TODO: add i18n support

// https://reactjs.org/docs/forms.html
export class Settings extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string,
    settings: PropTypes.shape({
      userName: PropTypes.string,
      theme: PropTypes.string,
      clockDisplay: PropTypes.string,
      listenSendKeys: PropTypes.string,
      locale: PropTypes.string
    })
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
      ComponentUtils.plusTheme( 'form-select', theme ),
    );

    const buttonClass = classNames(
      ComponentUtils.plusTheme( 'btn', theme ),
      'btn--expand'
    );

    return (
      <Fragment>

        <ContainerBody theme={ theme }>
          <div className="settings__body">

            <FormGroup
              theme={ theme }
              label={ 'User Name' /* TODO: use i18n support */ }>
              <InputField
                name="userName"
                value={ settings.userName }
                onChange={ this.handleChange }
              />
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={ 'Interface color' /* TODO: use i18n support */ }>
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
              label={ 'Clock display' /* TODO: use i18n support */ }>
              <InputRadioGroup
                name="clockDisplay"
                selected={ settings.clockDisplay }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ '12 Hours' /* TODO: use i18n support */ }
                  value="12"
                />
                <InputRadio
                  label={ '24 Hours' /* TODO: use i18n support */ }
                  value="24"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={
                `Send messages on ${ constants.keysToListenLabel }`
                /* TODO: use i18n support */
              }>
              <InputRadioGroup
                name="listenSendKeys"
                selected={ settings.listenSendKeys ? 'on' : 'off' }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ 'On' /* TODO: use i18n support */ }
                  value="on"
                />
                <InputRadio
                  label={ 'Off' /* TODO: use i18n support */ }
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
                  <option value="en">{ 'English' /* TODO: use i18n support */ }</option>
                  <option value="pt">{ 'Portuguese' /* TODO: use i18n support */ }</option>
                  <option value="es">{ 'Spanish' /* TODO: use i18n support */ }</option>
                </select>
              </div>
            </div>
          </div>
        </ContainerBody>

        <ContainerFooter>
          <button
            className={ buttonClass }
            onClick={ this.handleResetClick }>
            <i className="fas fa-undo fa-fw"></i> { 'Reset to Default' /* TODO: use i18n support */ }
          </button>
        </ContainerFooter>
      </Fragment>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  settings: settingsSelectors.getSettings( state ),
  theme: settingsSelectors.getTheme( state )
});

// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
const mapDispatchToProps = {
  updateField: settingsOperations.update,
  restoreFields: settingsOperations.restore
}

const SettingsReduxConnected = connect(mapStateToProps, mapDispatchToProps)(Settings);

// https://reacttraining.com/react-router/web/guides/redux-integration
const SettingsReduxWithRouter = withRouter(SettingsReduxConnected);

export default SettingsReduxWithRouter;
