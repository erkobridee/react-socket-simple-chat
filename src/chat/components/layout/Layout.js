import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './stylesClassNames';

import LayoutPiece from 'chat/components/layout/LayoutPiece';

/*
  <Layout>
    {children}
  </Layout>
*/
const Layout = ({ theme, children }) => (
  <LayoutPiece { ...{ mainClassName: styles.main, theme } }>
    <div className={ styles.container }>
      { children }
    </div>
  </LayoutPiece>
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
Layout.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default Layout;
