import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import dayjs from 'dayjs';

import constants from 'chat/constants'

import styles from './stylesClassNames';

import { utils as componentUtils } from 'chat/components';

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
// const RenderRawHTML = ({ html }) => (
//   <div dangerouslySetInnerHTML={{ __html: html }}></div>
// );

const Message = ({ t, theme, userName, clockDisplay, data }) => {

  const isOtherUser = (userName !== data.user);

  const time = (
    data.time ?
      dayjs(data.time)
        .format( t(`format.time.${clockDisplay}`) )
      : ''
  );

  const userInfo = (
    isOtherUser ? `${data.user}, ${time}` : time
  );

  const messageClass = classNames(
    componentUtils.plusTheme( styles.message, theme ),
    { incoming: isOtherUser }
  );

  const containerClass = classNames(
    componentUtils.plusTheme( styles.messageContainer, theme )
  );

  const containerUserClass = classNames(
    componentUtils.plusTheme( styles.messageContainerUser, theme ),
    { incoming: isOtherUser }
  );

  const containerValueClass = classNames(
    componentUtils.plusTheme( styles.messageContainerValue, theme ),
    { incoming: isOtherUser }
  );

  return (
    <div className={ messageClass }>
      <div className={ containerClass }>
        <div className={ containerUserClass }>
          { userInfo }
        </div>
        <div className={ containerValueClass }>
          { /* TODO: define inner components to handle and parse the message */ }
          { data.i18n ? t(data.i18n) : data.message }
          { /* <RenderRawHTML html={ data.message } /> */ }
        </div>
      </div>
    </div>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
Message.propTypes = {
  theme: PropTypes.string,
  userName: PropTypes.string.isRequired,
  clockDisplay: PropTypes.string.isRequired,
  data: PropTypes.shape({
    user: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
  }).isRequired,
  t: PropTypes.func.isRequired
};

// https://reactjs.org/docs/react-without-es6.html#declaring-default-props
Message.defaultProps = {
  theme: constants.defaultSettings.theme
};

export default Message;
