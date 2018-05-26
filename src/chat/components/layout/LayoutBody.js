import React from 'react';
import PropTypes from 'prop-types';

import styles from './stylesClassNames';

import LayoutPiece from 'chat/components/layout/LayoutPiece';

/*
  <Layout>

    // router
    <LayoutBody>
      {children}
    </LayoutBody>
  </Layout>
*/
const LayoutBody = ({ children }) => (
  <LayoutPiece
    { ...{ mainClassName: styles.layoutBody, children } }
  />
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
LayoutBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default LayoutBody;
