// container component

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ContainerBody, ContainerFooter } from 'chat/components/layout';

import checkIsMobile from 'chat/services/is-mobile';

// TODO: add i18n support

const LoremIpsum = () => (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae turpis sed lectus laoreet tempus. Praesent vehicula ultricies est sed venenatis. Etiam imperdiet massa ut porttitor porttitor. Praesent id convallis ex, vel elementum arcu. Sed vitae ex vitae turpis lobortis varius quis vehicula arcu. Nulla facilisi. Pellentesque tempor, lorem id pulvinar lacinia, eros purus gravida est, ut consequat ante ex nec lectus. Cras dignissim pharetra nulla, convallis tincidunt lectus dictum in. Pellentesque at nisi sit amet tortor placerat eleifend. Morbi non rutrum diam. In hac habitasse platea dictumst. Cras congue dapibus enim vel luctus. Praesent posuere ante urna, gravida pulvinar ex interdum in. Fusce at sollicitudin erat.</div>
);

// https://reactjs.org/docs/forms.html
class Settings extends Component {

  // https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    theme: PropTypes.string.isRequired,
    isMobile: PropTypes.bool
  };

  // https://reactjs.org/docs/react-without-es6.html#declaring-default-props
  static defaultProps = {
    theme: 'light',
    isMobile: checkIsMobile.any()
  };

  state = {
    form: {
      userName: 'guest0001',
      theme: this.props.theme,
      clickDisplay: 12,
      listenSendKeys: false,
      locale: 'en' // used to the i18n 
    }
  };

  handleResetClick = ( event ) => {
    
    // TODO: remove
    console.log( 'Settings: clicked on reset to default button' );

    // TODO: define the code logic 

  };

  render() {
    const { theme, isMobile } = this.props;
    
    const buttonClass = classNames(
      'btn', 'btn-expand',
      `btn--${theme}`
    );

    // useful reference about how to define input radio
    // http://react.tips/radio-buttons-in-reactjs/

    return (
      <Fragment>
        
        <ContainerBody>
          <div className={'settings__body'}>
            <div>
              <div>User Name</div>
              <div><input className={'form-control'} type="text" value={'Guest0001'} onChange={ () => '' }/></div>
            </div>

            <div>
              <div>Interface color</div>
              <div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="light" checked={true} onChange={ () => '' }/>
                    Light
                  </label>
                </div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="dark" checked={false} onChange={ () => '' }/>
                    Dark
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>Clock display</div>
              <div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="12" checked={true} onChange={ () => '' }/>
                    12 Hours
                  </label>
                </div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="24" checked={false} onChange={ () => '' }/>
                    24 Hours
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>Send messages on { isMobile ? 'ENTER' : 'CTRL + ENTER' }</div>
              <div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="on" checked={false} onChange={ () => '' }/>
                    On
                  </label>
                </div>
                <div className={'form-radio'}>
                  <label>
                    <input type="radio" value="off" checked={true} onChange={ () => '' }/>
                    Off
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>Language</div>
              <div>
                <select value={'lime'} onChange={ () => ''}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
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