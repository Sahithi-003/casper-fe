import React from 'react';
import ParentInputField from '.';
import { render, screen } from '@testing-library/react';

describe('ParentInputfield', () => {
  test('renders ParentInputfield', () => {
    render(
      <ParentInputField
        placeholder={'Test'}
        TypoChildren={'Testing'}
        charCount={0}
        checked={false}
        maxCharCount={5}
      ></ParentInputField>,
    );
    const inputField = screen.getByTestId('input-field');
    expect(inputField).toBeInTheDocument();
  });

  test('renders ParentInputField with charCount =maxCharCount', () => {
    render(
      <ParentInputField
        placeholder={'Test'}
        TypoChildren={'Testing'}
        charCount={5}
        inputValue="12345"
        checked={false}
        maxCharCount={5}
      ></ParentInputField>,
    );
    const inputField = screen.getByTestId('input-field');
    expect(inputField).toBeInTheDocument();
  });
});
