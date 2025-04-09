import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CustomSwitch, { SwitchProps } from './index';

export default {
  title: 'Atoms/Switch',
  component: CustomSwitch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <CustomSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  Checked: false,
};
export const Checked = Template.bind({});
Checked.args = {
    Checked: true,
};
