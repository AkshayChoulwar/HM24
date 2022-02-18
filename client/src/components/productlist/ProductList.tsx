import React from 'react'
import { ProductsContext } from '../../contexts';
import { ProductListProps } from '../../helpers';
import { Article, Category } from '../../types';
import { ArticleCard } from '../articlecard/ArticleCard';
import { StyledArticlesContent, StyledDivContent } from './StyledProducttList';

export const ProductList = ({ searchTerm }: ProductListProps) => {

  const data = React.useContext(ProductsContext);

  const articles = data?.map((category: Category) => {
    return category.categoryArticles.articles.map((article: Article) => {
      if ((article.name.toLowerCase()).includes(searchTerm.toLowerCase())) {
        return <ArticleCard article={article} />;
      }
    });
  });

  return (
    <StyledDivContent>
      {data?.length ? (
        <h1>
          {data[0]?.name}
          <small> ({data[0]?.articleCount})</small>
        </h1>
      ) :
        'Loading...'
      }

      <StyledArticlesContent>
        {articles}
      </StyledArticlesContent>
    </StyledDivContent>
  )
}
