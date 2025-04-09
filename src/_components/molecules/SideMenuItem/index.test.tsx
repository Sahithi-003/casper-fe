import SideMenuItem from './index'
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Switch', () => {
  it('should render switch', () => {
    render(<SideMenuItem title={'Dashboard'} muiIcon={<img src={'home.svg'} alt="home" />} />);
    const switchButton = screen.getByTestId('side-text');
    expect(switchButton).toBeInTheDocument();
  });
});