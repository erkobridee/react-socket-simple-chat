import React, { Component } from 'react';

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
      <div className={'container__body__content'}>
      { children && children }
      </div>
    );
  }
}

export default ContainerBody;