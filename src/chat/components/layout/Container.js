import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { plusTheme } from 'chat/components/utils';

/*
  <Layout>

    // router
    <LayoutBody>

      // chat or settings
      <Container>
        {children}
      </Container>
    </LayoutBody>
  </Layout>
*/
const Container = ({ children }) => (
  <Fragment>
    { children }
  </Fragment>
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default Container;
