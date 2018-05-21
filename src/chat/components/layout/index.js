/*
  exposes the application layout components 

  <Layout>

    // navbar
    <LayoutHeader>
      {children}
    </LayoutHeader>

    // router
    <LayoutBody>
      
      // chat or settings
      <Container>

        <ContainerBody>
          {children}
        </ContainerBody>

        <ContainerFooter>
          {children}
        </ContainerFooter>
      </Container>
    </LayoutBody>
  </Layout>
*/

// TODO: implement coumpound & context api support (the second one to color themes support)
// https://itnext.io/using-advanced-design-patterns-to-create-flexible-and-reusable-react-components-part-1-dd495fa1823
// https://itnext.io/using-advanced-design-patterns-to-create-flexible-and-reusable-react-components-part-2-react-3c5662b997ab

import Layout from './Layout';
import LayoutHeader from './LayoutHeader';
import LayoutBody from './LayoutBody';
import Container from './Container';
import ContainerBody from './ContainerBody';
import ContainerFooter from './ContainerFooter';

export {
  Layout,
  LayoutHeader,
  LayoutBody,
  Container,
  ContainerBody,
  ContainerFooter
};

export default Layout;
