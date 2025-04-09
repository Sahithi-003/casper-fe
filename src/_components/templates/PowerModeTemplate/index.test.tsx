import React from 'react';
import { render, screen } from '@testing-library/react';
import { PowerModeTemplate } from '.';

it('renders PowerModeTemplate', () => {
  render(<PowerModeTemplate />);
  const template = screen.getAllByTestId('template1');
  expect(template).toBeTruthy();
});
