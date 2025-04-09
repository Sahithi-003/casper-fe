import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TemplatesGrid from '.';
import { templatesData } from '../../../core-utils/constants';

const onSelectionTemplate = jest.fn();

describe('render view all templates', () => {
  it('should render view all templates', () => {
    render(
      <TemplatesGrid
        onSelectionTemplate={onSelectionTemplate}
        templatesData={templatesData}
      />,
    );
    const grid = screen.getByTestId('templates-grid');
    const searchBar = screen.getByPlaceholderText('Search Text...');
    const googleTag = screen.getByText('Google');
    fireEvent.click(googleTag);
    fireEvent.change(searchBar, { target: { value: 'Ad' } });
    expect(grid).toBeInTheDocument();
    const card = screen.getAllByTestId('template-card')[0];
    fireEvent.click(card);
    expect(onSelectionTemplate).toBeCalledTimes(1);
  });
});
