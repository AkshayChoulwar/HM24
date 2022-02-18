import React from 'react';
import { render, screen } from "@testing-library/react";
import { ProductsContext } from '../../contexts';
import { Categories } from './Categories';

describe("Test the categories in sidebar", () => {

  it('Show loading when categories not present', () => {
    render(
      <ProductsContext.Provider value={null}>
        <Categories />
      </ProductsContext.Provider>
    );
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('Show category links when categories available', () => {
    render(
      <ProductsContext.Provider value={[
        {
          childrenCategories: [{
            urlPath: 'testing.com',
            name: 'testing'
          }]
        }
      ]}>
        <Categories />
      </ProductsContext.Provider>
    )
    expect(screen.getByText('testing')).toBeInTheDocument();
  })
});