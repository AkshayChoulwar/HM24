import React from 'react';
import { render, screen } from "@testing-library/react";
import { Header } from './Header';
import { HeaderProps } from '../../helpers';

describe('Test the Header component', () => {
  const mockHeaderProps: HeaderProps = {
    searchTerm: "Sofa",
    setSearchTerm: (val) => {

    }
  }
  it('render header successfully', () => {
    render(
      <Header {...mockHeaderProps}></Header>
    );
    expect(screen.getByText("home24")).toBeInTheDocument();
  })
});
