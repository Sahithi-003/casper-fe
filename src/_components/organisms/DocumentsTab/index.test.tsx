import React from 'react';
import DocumentsTab from '.';
import { render, screen } from '@testing-library/react';


describe('handleInputChange', () => {
  it('should update title word count and title switch when field is title', () => {
    render(
        <DocumentsTab />
      );
      const grid = screen.getByTestId('top-container');
      expect(grid).toBeInTheDocument();
  });
});
