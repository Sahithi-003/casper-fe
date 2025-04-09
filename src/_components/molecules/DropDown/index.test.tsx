import React from 'react';
import Dropdown from '.';
import { render, screen } from '@testing-library/react';
import { menuItems } from '../../../core-utils/constants';

describe('Dropdown', () => {
  test('renders Dropdown', () => {
    render(<Dropdown menuItems={menuItems}></Dropdown>);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
});
