import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GenerateHeader } from '.';
import Vector from '../../../../public/images/Vector.png';
import { contentDescConst } from '../../../core-utils/constants';

it('renders generate header', () => {
  render(
    <GenerateHeader
      body={contentDescConst[0].HEADER_TITLE}
      subtitle={contentDescConst[0].HEADER_SUBTITLE}
      width={48}
      height={48}
      image={Vector}
    />,
  );
  const generateHeader = screen.getByTestId('generate-header');
  expect(generateHeader).toBeDefined();
  expect(generateHeader).toBeInTheDocument();
});
