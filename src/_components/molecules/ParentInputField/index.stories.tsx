import React from 'react';
import { ComponentStory } from '@storybook/react';
import ParentInputField from './index';

export default {
  title: 'Molecules/ParentInputField',
  component: ParentInputField,
};

const Template: ComponentStory<typeof ParentInputField> = (args) => (
  <ParentInputField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Write a title for your document...',
  charCount: 20,
  TypoChildren: 'Title',
};
