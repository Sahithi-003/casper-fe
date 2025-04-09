import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TopNavBar from '.';

const onSelection = jest.fn();

const onFileNameChange = jest.fn();
const onMoreClick = jest.fn();

describe('Renders top nav bar component', () => {
  test('Should Renders top nav bar component', () => {
    render(
      <TopNavBar
        activeIndex={0}
        onSelection={onSelection}
        onFileNameChange={onFileNameChange}
        noOfWords={0}
        onMoreClick={onMoreClick}
      />,
    );
    const component = screen.getByTestId('top-nav-bar');
    // const inputField = screen.getByDisplayValue('Untitled File');
    // fireEvent.change(inputField, { target: { value: 'Facebook' } });
    expect(component).toBeInTheDocument();
  });
});
