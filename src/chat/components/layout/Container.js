import React, { Component, Fragment } from 'react';

/*
  <Layout>

    // router
    <LayoutBody>

      // chat or settings
      <Container>
        {children}
      </Container>
    </LayoutBody>
  </Layout>
*/
class Container extends Component {

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        { children }
      </Fragment>
    );
  }
}

export default Container;
