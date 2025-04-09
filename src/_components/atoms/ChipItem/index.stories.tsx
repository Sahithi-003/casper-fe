import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ChipItem from './index';

export default {
  title: 'Atoms/ChipItem',
  component: ChipItem,
  argTypes: { onClick: { action: 'chip-clicked' } },
} as ComponentMeta<typeof ChipItem>;

const Template: ComponentStory<typeof ChipItem> = (args) => (
  <ChipItem {...args} />
);

export const AllChipItem = Template.bind({});

AllChipItem.args = {
  label: 'All',
  active: true,
};

export const VideoChipItem = Template.bind({});

VideoChipItem.args = {
  label: 'Video',
  active: false,
};
