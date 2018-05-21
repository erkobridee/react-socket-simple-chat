import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './stylesClassNames';

/*
  <Layout>
    {children}
  </Layout>
*/
class Layout extends Component {
  
  render() {
    const mainClass = classNames(
      styles.main,
      `${styles.main}--${this.props.theme || 'light'}`
    );

    const { children } = this.props;

    return (
      <div className={mainClass}>
        <div className={styles.container}>
        { children && children }
        </div>
      </div>
    );
  }
}

export default Layout;