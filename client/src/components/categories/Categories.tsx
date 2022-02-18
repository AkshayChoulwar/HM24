import React from 'react';
import { ProductsContext } from '../../contexts';

export const Categories = () => {
  const data = React.useContext(ProductsContext);
  const firstCategory = data?.length && data[0];

  if (!firstCategory) {
    return <h3>Loading</h3>;
  }

  return (
    <ul>
      {firstCategory.childrenCategories?.map((element: any) => {
        return (
          <li key={element.urlPath}>
            <a href={`/${element.urlPath}`}>{element.name}</a>
          </li>
        );
      })}
    </ul>
  );
};