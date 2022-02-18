import React, { Component } from 'react'
import { ErrorBoundaryProps } from '../../helpers';
import { ErrorBoundaryState } from '../../types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state;
    const { FallbackUI } = this.props;

    if (error) {
      return <FallbackUI error={error} />
    }

    return this.props.children;
  }
}