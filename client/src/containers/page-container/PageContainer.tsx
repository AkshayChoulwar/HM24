import React from 'react';
import {
  ErrorBoundary, ProductListFallbackUI,
  ProductList, Footer, Sidebar, Header
} from '../../components';
import { useProducts } from '../../hooks';
import { StyledPageContainer } from './StyledPageContainer';
import { ProductsContext } from '../../contexts';

export const PageContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const responseData = useProducts('./graphql');
  const { data } = responseData;

  return (
    <StyledPageContainer>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ErrorBoundary FallbackUI={ProductListFallbackUI}>
        <ProductsContext.Provider value={data}>
          <Sidebar />
          <ProductList searchTerm={searchTerm} />
        </ProductsContext.Provider>
      </ErrorBoundary>
      <Footer />
    </StyledPageContainer>
  )
}