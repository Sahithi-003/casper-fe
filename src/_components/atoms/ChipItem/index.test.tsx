import ChipItem from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

it('renders non active icon ', () => {
  const handleClick = jest.fn();
  render(<ChipItem label="All" active={true} onClick={handleClick} />);
  const chip = screen.getByTestId('chip');
  expect(chip).toBeDefined();
  fireEvent.click(chip);
  expect(handleClick).toBeCalledTimes(1);
  expect(chip).toBeInTheDocument();
});

it('renders active icon', () => {
  const handleClick = jest.fn();
  render(<ChipItem label="Video" active={false} onClick={handleClick} />);
  const chip = screen.getByTestId('chip');
  expect(chip).toBeDefined();
  fireEvent.click(chip);
  expect(handleClick).toBeCalledTimes(1);
  expect(chip).toBeInTheDocument();
});
