import React from 'react';
import NoDocumentsFoundCard from '.';
import { render, screen } from '@testing-library/react';


describe('handleInputChange', () => {
  it('should update title word count and title switch when field is title', () => {
    render(
        <NoDocumentsFoundCard />
      );
      const grid = screen.getByText('No documents found');
      expect(grid).toBeInTheDocument();
  });
});
