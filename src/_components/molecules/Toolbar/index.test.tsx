import React from 'react';
import Toolbar from '.';
import { render, screen } from '@testing-library/react';

describe('Toolbar', () => {
  test('renders Toolbar', () => {
    const handleMouseDownBlock = jest.fn();
    const handleMouseDownMark = jest.fn();
    render(
      <Toolbar
        onMouseDownBlock={handleMouseDownBlock}
        onMouseDownMarkButton={handleMouseDownMark}
      />,
    );
    expect(screen.getByTestId('tool-bar')).toBeInTheDocument();
  });
});