import React from 'react';
import { screen, render } from "@testing-library/react";
import { ProductsContext } from '../../contexts';
import { ProductList } from './ProductList';
import { Category } from '../../types';

describe('Testing Product List component', () => {

  const mockData: Category[] = [
    {
      name: 'test-category',
      articleCount: 10,
      categoryArticles: {
        articles: [
          {
            name: "test-article",
            variantName: 'test-variant',
            prices: {
              currency: "EUR",
              regular: {
                value: 123
              }
            },
            images: [{
              path: "https://something.com"
            }]
          }
        ]
      },
      childrenCategories: [
        {
          name: "test-child",
          urlPath: "https://something.com"
        }
      ]
    }
  ]

  it("render product list successfully", () => {
    render(
      <ProductsContext.Provider value={mockData}>
        <ProductList searchTerm="" />
      </ProductsContext.Provider>
    );

    expect(screen.getByText('test-category')).toBeInTheDocument();
    expect(screen.getByText('test-article')).toBeInTheDocument();
  })
});
