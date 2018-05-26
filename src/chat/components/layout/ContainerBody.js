import React from 'react';
import PropTypes from 'prop-types';

import styles from './stylesClassNames';

import LayoutPiece from 'chat/components/layout/LayoutPiece';

/*
  <Layout>

    // router
    <LayoutBody>

      // chat or settings
      <Container>

        <ContainerBody>
          {children}
        </ContainerBody>
      </Container>
    </LayoutBody>
  </Layout>
*/
const ContainerBody = ({ theme, className, children }) => (
  <LayoutPiece
   { ...{ mainClassName: styles.containerBody, theme, className, children } }
  />
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
ContainerBody.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default ContainerBody;
