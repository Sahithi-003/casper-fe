import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextIcon } from '.';

describe('Navigation Item tests', () => {
  it('renders the menuItem', () => {
    render(
      <TextIcon
        icon={'../../../../public/images/Vector.png'}
        iconSelected={'../../../../public/images/Youtube.png'}
        selected={false}
        label={'Home'}
      />,
    );

    const MuiElement = screen.getByRole('img');
    expect(MuiElement).toBeInTheDocument();

    const text = screen.getByText('Home');
    expect(text).toBeInTheDocument();
  });
  it('renders the selected menuItem', () => {
    render(
      <TextIcon
        icon={'../../../../public/images/Vector.png'}
        iconSelected={'../../../../public/images/Youtube.png'}
        selected={true}
        label={'Home'}
      />,
    );

    const MuiElement = screen.getByRole('img');
    expect(MuiElement).toBeInTheDocument();

    const text = screen.getByText('Home');
    expect(text).toBeInTheDocument();
  });
});
