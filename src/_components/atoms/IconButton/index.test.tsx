import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconButtonComponent from '.';

it('renders non active icon ', () => {
  render(
    <IconButtonComponent
      src="eye.svg"
      img_height="16px"
      img_width="16px"
      height="32px"
      width="32px"
      active={true}
    />,
  );
  const icon = screen.getByTestId('iconComponent');
  expect(icon).toBeDefined();
  expect(icon).toBeInTheDocument();
});

it('renders active icon', () => {
  render(
    <IconButtonComponent
      src="eye.svg"
      img_height="16px"
      img_width="16px"
      height="32px"
      width="32px"
      active={false}
    />,
  );
  const icon = screen.getByTestId('iconComponent');
  expect(icon).toBeDefined();
  expect(icon).toBeInTheDocument();
});

it('renders non active letter ', () => {
  render(
    <IconButtonComponent letter="S" height="32px" width="32px" active={true} />,
  );
  const icon = screen.getByTestId('iconComponent');
  expect(icon).toBeDefined();
  expect(icon).toBeInTheDocument();
});

it('renders active icon', () => {
  render(
    <IconButtonComponent
      letter="S"
      height="32px"
      width="32px"
      active={false}
    />,
  );
  const icon = screen.getByTestId('iconComponent');
  expect(icon).toBeDefined();
  expect(icon).toBeInTheDocument();
});
