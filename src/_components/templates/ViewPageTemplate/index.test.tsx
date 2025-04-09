import React from 'react';
import { render, screen } from '@testing-library/react';
import ViewPageTemplate from '.';

it('renders ViewPageTemplate', () => {
  render(<ViewPageTemplate />);
  const template = screen.getAllByTestId('template1');
  expect(template).toBeTruthy();
});
