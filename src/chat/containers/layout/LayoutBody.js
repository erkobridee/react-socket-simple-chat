import React, { Component } from 'react';
import styles from './stylesClassNames';

/*
  <Layout>

    // router
    <LayoutBody>
      {children}
    </LayoutBody>
  </Layout>
*/
class LayoutBody extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layoutBody}>
      { children && children }
      </div>
    );
  }
}

export default LayoutBody;