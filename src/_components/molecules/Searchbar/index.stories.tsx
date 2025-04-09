import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { SearchBar } from '.';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Search = Template.bind({});
Search.args = {
  textVariant: 'small',
  placeholder: 'Search...',
};
