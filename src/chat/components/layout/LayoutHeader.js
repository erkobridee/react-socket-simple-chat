import React from 'react';
import PropTypes from 'prop-types';

import styles from './stylesClassNames';

import LayoutPiece from 'chat/components/layout/LayoutPiece';

/*
  <Layout>

    // navbar
    <LayoutHeader>
      {children}
    </LayoutHeader>
  </Layout>
*/
const LayoutHeader = ({ theme, children }) => (
  <LayoutPiece
    { ...{ mainClassName: styles.layoutHeader, theme, children } }
  />
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
LayoutHeader.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default LayoutHeader;
