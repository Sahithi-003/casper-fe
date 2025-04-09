import React from 'react';
import AiOutputCard from '.';
import { render, screen } from '@testing-library/react';

describe('AiOutputCard', () => {
  test('renders AiOutputCard', () => {
    render(
      <AiOutputCard CardContent='test' CardHeader='test header' CardTimeCounter='test time'/>,
    );
    expect(screen.getByTestId('ai-card')).toBeInTheDocument();
  });
});
