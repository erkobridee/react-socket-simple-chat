import React, { Component } from 'react';
import styles from './stylesClassNames';

/*
  <Layout>

    // navbar
    <LayoutHeader>
      {children}
    </LayoutHeader>
  </Layout>
*/
class LayoutHeader extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layoutHeader}>
      { children && children }
      </div>
    );
  }
}

export default LayoutHeader;