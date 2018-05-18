/*
  this file exposes the application layout components 

  <Layout>

    // navbar
    <LayoutHeader>
      {children}
    </LayoutHeader>

    // router
    <LayoutBody>
      
      // chat or settings
      <Content>

        <ContentBody>
          {children}
        </BodyContent>

        <ContentFooter>
          {children}
        </ContentFooter>
      </Content>
    </LayoutBody>
  </Layout>
*/

import React, { Component, Fragment } from 'react';

// TODO: remove
const Container = () => (
  <div>Hello from the container</div>
);


/*
  <Layout>
  </Layout>
*/
class Layout extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <div>Hello World!</div>
        { children && children }
      </Fragment>
    );
  }
}

// export default {
//   Layout: <Fragment />,
//   LayoutHeader: <Fragment />,
//   LayoutBody: <Fragment />,
//   Container: <Fragment />,
//   ContainerBody: <Fragment />,
//   ContainerFooter: <Fragment />
// };

export default Object.assign(Layout, {
  Container
})