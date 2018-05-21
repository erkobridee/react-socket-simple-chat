import React, { Component } from 'react';
import classNames from 'classnames';

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
    const layoutHeaderClass = classNames(
      styles.layoutHeader,
      `${styles.layoutHeader}--${this.props.theme || 'light'}`
    );

    const { children } = this.props;

    return (
      <div className={layoutHeaderClass}>
      { children && children }
      </div>
    );
  }
}

export default LayoutHeader;