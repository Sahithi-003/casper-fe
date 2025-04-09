import React from 'react';
import Avatar from '.';
import { render, screen } from '@testing-library/react';

describe('Avatar', () => {
  test('renders Avatar', () => {
    render(
      <Avatar
        alt="Amy Woods"
        backgroundColor="#056AD0"
        height="32px"
        width="32px"
      />,
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
