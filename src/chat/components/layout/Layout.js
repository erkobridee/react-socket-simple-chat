import React, { Component, Fragment } from 'react';
import styles from './stylesClassNames';

/*
  <Layout>
    {children}
  </Layout>
*/
class Layout extends Component {
  
  render() {
    const { children } = this.props;

    const mainStyles = [
      styles.main
      // TODO: add color theme support
    ];

    return (
      <div className={mainStyles}>
        <div className={styles.layout}>
        { children && children }
        </div>
      </div>
    );
  }
}

export default Layout;