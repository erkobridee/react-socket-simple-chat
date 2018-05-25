import React, { Component } from 'react';
import classNames from 'classnames';

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
    const { className } = this.props;

    const containerBodyClass = classNames(
      styles.containerBody,
      `${styles.containerBody}--${this.props.theme || 'light'}`,
      className
    );

    const { children } = this.props;

    return (
      <div className={containerBodyClass}>
      { children }
      </div>
    );
  }
}

export default ContainerBody;
