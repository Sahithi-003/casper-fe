import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Image } from '.';

it('Check for Illustration', async () => {
  render(<Image source={'../../../../public/illustrations/Business Analysis 3D Illustration.png'} alt={'illustration'}></Image>);
  const MuiElement = screen.getByRole('img');
  expect(MuiElement).toBeInTheDocument();
});