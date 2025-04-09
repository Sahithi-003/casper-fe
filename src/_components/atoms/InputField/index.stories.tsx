import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputField from './index';
import { InputProps } from './index';

export default {
  title: 'atoms/InputField',
  component: InputField,
} as Meta;

const Template: Story<InputProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Write a title for your document...',
};


