import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TemplateCard from '.';
import facebook from './../../../../public/images/templates/facebook.png';

const handleClick = jest.fn();
describe('TemplateCard Test', () => {
  it('should TemplateCard', () => {
    render(
      <TemplateCard
        onClick={handleClick}
        image={facebook}
        templateName={'Marketing Angles'}
        templateDescription={
          'Create high converting copy for the “Primary Text” section of your facebook ads.'
        }
      />,
    );
    const card = screen.getByTestId('template-card');
    fireEvent.click(card);
    expect(card).toBeInTheDocument();
    expect(handleClick).toBeCalledTimes(1);
  });
});
