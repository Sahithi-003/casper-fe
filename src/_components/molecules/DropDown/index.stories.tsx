import React from 'react';
import { ComponentStory } from '@storybook/react';
import Dropdown from './index';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
};
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItems: ['English', 'Spanish', 'French'],
  placeholder: 'Language',
  width: '258px',
  height: '44px',
};
