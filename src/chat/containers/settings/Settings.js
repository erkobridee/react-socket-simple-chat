// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import { FormGroup, InputField, InputRadioGroup, InputRadio } from 'chat/components/form';

import { utils as componentUtils } from 'chat/components';

import constants from 'chat/constants'

import {
  selectors as settingsSelectors,
  operations as settingsOperations
} from 'chat/states/ducks/settings';

import {
  selectors as messagesSelectors,
  operations as messagesOperations
} from 'chat/states/ducks/messages';


// https://reactjs.org/docs/forms.html
export class Settings extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    settings: PropTypes.shape({
      userName: PropTypes.string,
      theme: PropTypes.string,
      clockDisplay: PropTypes.string,
      listenSendKeys: PropTypes.bool,
      locale: PropTypes.string
    }),
    theme: PropTypes.string,
    availableLanguages: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })),
    messagesLength: PropTypes.number,
    t: PropTypes.func
  }

  handleResetClick = ( event ) => {
    const { restoreFields } = this.props;
    restoreFields();
  }

  handleDeleteMessagesClick = ( event ) => {
    const { deleteMessages } = this.props;
    deleteMessages();
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
    const {
      t, theme, settings,
      messagesLength, availableLanguages
    } = this.props;

    const selectClass = classNames(
      componentUtils.plusTheme( 'form-select', theme ),
    );

    const buttonCleanupClass = classNames(
      componentUtils.plusTheme( 'btn', theme )
    );

    const buttonClass = classNames(
      componentUtils.plusTheme( 'btn', theme ),
      'btn--expand'
    );

    return (
      <Fragment>

        <ContainerBody theme={ theme } className="enable-scroll">
          <div className="settings__body">

            <FormGroup
              theme={ theme }
              label={ t('username') }>
              <InputField
                name="userName"
                value={ settings.userName }
                onChange={ this.handleChange }
              />
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={ t('interface.color') }>
              <InputRadioGroup
                name="theme"
                selected={ settings.theme }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ t('color.light') }
                  value="light"
                />
                <InputRadio
                  label={ t('color.dark') }
                  value="dark"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={ t('clock.display') }>
              <InputRadioGroup
                name="clockDisplay"
                selected={ settings.clockDisplay }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ t('clock.hours', { value: 12 }) }
                  value="12"
                />
                <InputRadio
                  label={ t('clock.hours', { value: 24 }) }
                  value="24"
                />
              </InputRadioGroup>
            </FormGroup>

            <FormGroup
              theme={ theme }
              label={
                t('send.messages', { value: constants.keysToListenLabel })
              }>
              <InputRadioGroup
                name="listenSendKeys"
                selected={
                  // map the boolean value to a string value
                  settings.listenSendKeys ? 'on' : 'off'
                }
                onChange={ this.handleChange }>
                <InputRadio
                  label={ t('send.messages.on') }
                  value="on"
                />
                <InputRadio
                  label={ t('send.messages.off') }
                  value="off"
                />
              </InputRadioGroup>
            </FormGroup>

            <div>
              <div>{ t('language') }</div>
              <div>
                <select
                  name="locale"
                  className={ selectClass }
                  value={ settings.locale }
                  onChange={ this.handleChange }>
                  {
                    availableLanguages.map((locale, idx) => (
                      <option
                        key={ idx }
                        value={ locale.value }>
                        { t( locale.key ) }
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="cached-messages">
              <div>
                { t('cached.messages', { value: messagesLength }) }
              </div>
              <div>
                <button
                  className={ buttonCleanupClass }
                  onClick={ this.handleDeleteMessagesClick }>
                  <i className="fas fa-eraser fa-fw"></i> { t('cleanup.messages') }
                </button>
              </div>
            </div>
          </div>
        </ContainerBody>

        <ContainerFooter>
          <button
            className={ buttonClass }
            onClick={ this.handleResetClick }>
            <i className="fas fa-undo fa-fw"></i> { t('restore.default') }
          </button>
        </ContainerFooter>
      </Fragment>
    );
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = ( state ) => ({
  settings: settingsSelectors.getSettings( state ),
  availableLanguages: settingsSelectors.getAvailableLanguages(),
  theme: settingsSelectors.getTheme( state ),
  messagesLength: messagesSelectors.getMessagesLength( state )
});

// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
const mapDispatchToProps = {
  updateField: settingsOperations.update,
  restoreFields: settingsOperations.restore,
  deleteMessages: messagesOperations.remove
}

const SettingsRedux = connect(mapStateToProps, mapDispatchToProps)(Settings);

// https://reacttraining.com/react-router/web/guides/redux-integration
const SettingsRouter = withRouter(SettingsRedux);

const SettingsI18N = translate('settings')(SettingsRouter);

export default SettingsI18N;
