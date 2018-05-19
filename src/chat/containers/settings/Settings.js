import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { ContainerBody, ContainerFooter } from 'chat/containers/layout';

class Settings extends Component {

  render() {
    const buttonClass = classNames(
      'btn', 'btn-expand',
      `btn--${this.props.theme || 'light'}`,
      'settings__btn' // TODO: remove
    );

    return (
      <Fragment>
        
        <ContainerBody>
          <strong>TODO:</strong> define settings component
        </ContainerBody>
        
        <ContainerFooter>
          <button 
            className={buttonClass}>
            <i className="fas fa-undo fa-fw"></i> Reset to Default
          </button>
        </ContainerFooter>
      </Fragment>
    );
  }
}

export default Settings;