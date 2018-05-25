import React, { Component } from 'react';
import styles from './stylesClassNames';

/*
  <Layout>

    // router
    <LayoutBody>

      // chat or settings
      <Container>

        <ContainerFooter>
          {children}
        </ContainerFooter>
      </Container>
    </LayoutBody>
  </Layout>
*/
class ContainerFooter extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className={styles.containerFooter}>
        { children }
      </div>
    );
  }
}

export default ContainerFooter;
