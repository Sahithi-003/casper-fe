import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LanguageOptions from '.';

const handleChange = jest.fn();

it('renders language options', () => {
  render(
    <LanguageOptions selectedLanguage={'English'} setLanguage={handleChange} />,
  );
  const languageOptions = screen.getByTestId('language-options');
  expect(languageOptions).toBeDefined();
  expect(languageOptions).toBeInTheDocument();
});
