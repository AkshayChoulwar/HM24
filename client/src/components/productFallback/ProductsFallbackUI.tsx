import React from 'react';
import { FallbackUIProps } from '../../helpers';

export const ProductListFallbackUI = ({ error }: FallbackUIProps) => {
  return (
    <div>
      <h4>You encountered error while fetching products: {error?.message}</h4>
    </div>
  );
}