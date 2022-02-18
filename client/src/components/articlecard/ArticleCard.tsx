import React from 'react';
import { formatter } from '../../helpers';
import { ArticleProps } from '../../helpers/PropTypes';
import { StyledArticleCard } from './StyledArticleCard';

export const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <StyledArticleCard>
      <img src={article.images[0].path} alt={article.name} />
      <span>{article.name}</span>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <button>Add to cart</button>
    </StyledArticleCard>
  )
};