import React, { Component } from 'react';
import styles from './stylesClassNames';

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
class ContainerBody extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div className={styles.containerBody}>
      { children && children }
      </div>
    );
  }
}

export default ContainerBody;