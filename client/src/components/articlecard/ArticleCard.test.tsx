import { render, screen } from "@testing-library/react";
import React from "react";
import { Article } from "../../types";
import { ArticleCard } from "./ArticleCard";

const mockArticle: Article = {
  name: "Sofa",
  variantName: "Variant",
  prices: {
    currency: 'EUR',
    regular: {
      value: 122
    }
  },
  images: [{
    path: "https://something.com"
  }]
};

describe('Testing ArticleCard', () => {

  it('Successfully rendered article rendered', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('Sofa')).toBeInTheDocument();
  });
});