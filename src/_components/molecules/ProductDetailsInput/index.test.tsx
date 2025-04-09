import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import {  render } from '@testing-library/react';
import ProductDetailsInput from '.';
import { contentDescConst } from '../../../core-utils/constants';

const handleChange = jest.fn();

it('renders product details card found card ', () => {
  const {getByTestId}=render(
    <ProductDetailsInput
      placeholder={contentDescConst[0].WRITE_CONTENT_PLACEHOlDER}
      wordCount={600}
      TypoChildren={contentDescConst[0].WRITE_CONTENT_TEXT}
      isImportant={true}
      bottom={''}
      value={'Paragraph'}
      setValue={handleChange}
    />,
  );
  const card = getByTestId('product-details-input');
  expect(card).toBeDefined();
  expect(card).toBeInTheDocument();
});
