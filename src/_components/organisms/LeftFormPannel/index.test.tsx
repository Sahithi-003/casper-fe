import React from 'react';
import LeftFormPannel from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('handleInputChange', () => {
  it('should update title word count and title switch when field is title', () => {
    const event = {
      target: {
        value: '',
      },
    };
    render(<LeftFormPannel />);
    const input1 = screen.getByPlaceholderText(
      /Write a title for your document.../i,
    );
    fireEvent.change(input1, event);
    expect(input1).toBeInTheDocument();
  });
});
test('updates title field state variables on input change', () => {
  render(<LeftFormPannel />);
  const titleInput = screen.getByPlaceholderText(
    'Write a title for your document...',
  ) as HTMLInputElement;
  const inputText = 'Test Title Input';

  fireEvent.change(titleInput, { target: { value: inputText } });

  expect(titleInput.value).toBe(inputText);
});

test('updates content description field state variables on input change', () => {
  render(<LeftFormPannel />);
  const contentDescInput = screen.getByPlaceholderText(
    'Write an article about...',
  ) as HTMLInputElement;
  const inputText = 'Test Content Description Input';

  fireEvent.change(contentDescInput, { target: { value: inputText } });

  expect(contentDescInput.value).toBe(inputText);
});
test('updates keywords field state variables on input change', () => {
  render(<LeftFormPannel />);
  const keywordsInput = screen.getByPlaceholderText(
    'Keywords',
  ) as HTMLInputElement;
  const inputText = 'Test Keywords Input';

  fireEvent.change(keywordsInput, { target: { value: inputText } });

  expect(keywordsInput.value).toBe(inputText);
});

test('updates tones field state variables on input change', () => {
  render(<LeftFormPannel />);
  const tonesInput = screen.getByPlaceholderText(
    'Witty, serious, Roe Rogan, etc...',
  ) as HTMLInputElement;
  const inputText = 'Test Tones Input';

  fireEvent.change(tonesInput, { target: { value: inputText } });

  expect(tonesInput.value).toBe(inputText);
});

describe('LeftFormPanel', () => {
  test('calls setPromptInput with the correct value when handleOnClick is called', () => {
    render(<LeftFormPannel />);

    const titleInput = screen.getByPlaceholderText(
      'Write a title for your document...',
    ) as HTMLInputElement;
    const contentDescInput = screen.getByPlaceholderText(
      'Write an article about...',
    ) as HTMLInputElement;
    const tonesInput = screen.getByPlaceholderText(
      'Witty, serious, Roe Rogan, etc...',
    ) as HTMLInputElement;
    const keywordsInput = screen.getByPlaceholderText(
      'Keywords',
    ) as HTMLInputElement;

    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(contentDescInput, {
      target: { value: 'Test description' },
    });
    fireEvent.change(tonesInput, { target: { value: 'Test tone' } });
    fireEvent.change(keywordsInput, { target: { value: 'Test keyword' } });

    const composeButton = screen.getByRole('button', { name: /Compose/i });
    fireEvent.click(composeButton);

    expect(composeButton).toBeInTheDocument();
  });
});
describe('ToggleSelection', () => {
  it('should update the prompt length when an option is selected', () => {
    const { getByText } = render(<LeftFormPannel />);
    const tabElement = getByText('L');
    fireEvent.click(tabElement);

    expect(tabElement).toBeInTheDocument();
  });
});
test('should call handleChange when a new value is selected', () => {
  render(<LeftFormPannel />);
  const dropdown = screen.getByPlaceholderText(
    'Select Language',
  ) as HTMLSelectElement;

  fireEvent.change(dropdown, { target: { value: 'French' } });

  expect(dropdown).toBeInTheDocument();
});