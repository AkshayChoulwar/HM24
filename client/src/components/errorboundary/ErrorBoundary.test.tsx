import React from 'react';
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from './ErrorBoundary';
import { ProductListFallbackUI } from '../productFallback/ProductsFallbackUI';

const ErrorChild = () => {
  throw new Error('Testing error boundary');
}

const SuccessChild = () => {
  return <div>Success Child</div>
}

describe('Test the error boundary', () => {
  it('render fallback ui when child throws error', () => {
    render(
      <ErrorBoundary FallbackUI={ProductListFallbackUI}>
        <ErrorChild />
      </ErrorBoundary>
    )

    expect(screen.getByText('You encountered error while fetching products: Testing error boundary')).toBeInTheDocument();
  });

  it('successfully render child when there is not error', () => {
    render(
      <ErrorBoundary FallbackUI={ProductListFallbackUI}>
        <SuccessChild />
      </ErrorBoundary>
    )

    expect(screen.getByText('Success Child')).toBeInTheDocument();
  });
});