import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import ToggleSelection from '.';

export default {
  title: 'molecules/ToggleSelection',
  component: ToggleSelection,
} as ComponentMeta<typeof ToggleSelection>;

const Template: ComponentStory<typeof ToggleSelection> = (args: any) => (
  <ToggleSelection {...args} />
);

export const iconToggleSelection = Template.bind({});
iconToggleSelection.args = {
  activeIndex: 0,
  type: 'icon',
  data: ['../../../assets/icons/eye.svg', '../../../assets/icons/file-05.svg'],
  onSelection: (data) => console.log(data),
  width: '72px',
};

export const letterToggleSelection = Template.bind({});
letterToggleSelection.args = {
  activeIndex: 0,
  type: 'letter',
  data: ['S', 'M', 'L'],
  onSelection: (data) => console.log(data),
  width: '108px',
};
