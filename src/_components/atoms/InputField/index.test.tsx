import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from './index';
import SearchIcon from '../../../../public/icons/search.svg';


describe('InputField component', () => {
  it('should render InputField component', () => {
    const { container } = render(
      <InputField placeholder={'Write an article about...'} />,
    );
    expect(container.querySelector('input')).toBeInTheDocument();
  });
  it('should render multiline InputField component', () => {
    render(
      <InputField placeholder={'Write an article about...'} isMultiline={true}/>,
    );
    expect(screen.getByTestId('input-field')).toBeInTheDocument();
  });
  it('should render search bar input component', () => {
    const { container } = render(
      <InputField
      image={SearchIcon}
      placeholder={'Search Text...'}
      isSearchBar={true}
    />
    );
    expect(container.querySelector('input')).toBeInTheDocument();
  });
});
