import React, { Component, Fragment } from 'react';
import { ContainerBody, ContainerFooter } from 'chat/containers/layout';

class Settings extends Component {

  render() {

    return (
      <Fragment>
        
        <ContainerBody>
          <strong>TODO:</strong> define settings component
        </ContainerBody>
        
        <ContainerFooter>
          <button 
            className={'btn btn-expand settings__btn'}>
            Reset to Default
          </button>
        </ContainerFooter>
      </Fragment>
    );
  }
}

export default Settings;