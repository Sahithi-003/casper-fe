import React from 'react';
import { render } from '@testing-library/react';
import CustomSwitch from './index';

describe('Switch', () => {
  it('should render switch', () => {
    const { getByRole } = render(<CustomSwitch Checked={false} />);
    const switchButton = getByRole('checkbox');
    expect(switchButton).toBeInTheDocument();
  });
});
