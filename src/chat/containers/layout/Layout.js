import React, { Component } from 'react';
import styles from './stylesClassNames';

/*
  <Layout>
    {children}
  </Layout>
*/
class Layout extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div className={styles.main}>
        <div className={styles.container}>
        { children && children }
        </div>
      </div>
    );
  }
}

export default Layout;