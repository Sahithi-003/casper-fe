// import React from 'react';
// import AIOutputTab from '.';
// import { render, screen } from '@testing-library/react';

// describe('AiOutputCard', () => {
//   test('renders AiOutputCard', () => {
//     render(<AIOutputTab />);
//     expect(screen.getByTestId('Ai-outputs')).toBeInTheDocument();
//   });
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import AIOutputTab from '.';

describe('AIOutputTab', () => {
  test('renders the component without crashing', () => {
    render(<AIOutputTab />);
    expect(screen.getByTestId('Ai-outputs')).toBeInTheDocument();
  });

  test('initial state is correct', () => {
    render(<AIOutputTab />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  // test('displays AI output cards correctly', async () => {
  //   const mockData = [
  //     {
  //       id: '1 0',
  //       header: 'Prompt 1',
  //       counterTime: '5 minutes ago',
  //       content: 'AI output 1',
  //     },
  //     {
  //       id: '1 1',
  //       header: 'Prompt 1',
  //       counterTime: '1 hour ago',
  //       content: 'AI output 2',
  //     },
  //   ];
  //   jest.spyOn(global, 'fetch').mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockData),
  //   });
  //   render(<AIOutputTab />);
  //   const cards = await screen.findAllByRole('listitem');
  //   expect(cards).toHaveLength(2);
  //   expect(screen.getByText(mockData[0].header)).toBeInTheDocument();
  //   expect(screen.getByText(mockData[0].content)).toBeInTheDocument();
  //   expect(screen.getByText(mockData[0].counterTime)).toBeInTheDocument();
  // });

  // test('filters AI outputs correctly', async () => {
  //   const mockData = [
  //     {
  //       id: '1 0',
  //       header: 'Prompt 1',
  //       counterTime: '5 minutes ago',
  //       content: 'AI output 1',
  //     },
  //     {
  //       id: '1 1',
  //       header: 'Prompt 2',
  //       counterTime: '1 hour ago',
  //       content: 'AI output 2',
  //     },
  //   ];
  //   jest.spyOn(global, 'fetch').mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockData),
  //   });
  //   render(<AIOutputTab />);
  //   const searchInput = screen.getByRole('textbox');
  //   await screen.findAllByRole('listitem');
  //   expect(screen.queryByText(mockData[1].header)).toBeInTheDocument();
  //   expect(screen.queryByText(mockData[1].content)).toBeInTheDocument();
  //   expect(screen.queryByText(mockData[1].counterTime)).toBeInTheDocument();
  //   userEvent.type(searchInput, 'prompt 1');
  //   expect(screen.queryByText(mockData[1].header)).not.toBeInTheDocument();
  //   expect(screen.queryByText(mockData[1].content)).not.toBeInTheDocument();
  //   expect(screen.queryByText(mockData[1].counterTime)).not.toBeInTheDocument();
  // });
});
