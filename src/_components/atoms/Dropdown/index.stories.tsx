import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { Dorpdown } from '.';

export default {
  title: 'atoms/Dorpdown',
  component: Dorpdown,
};

const Template: ComponentStory<typeof Dorpdown> = (args) => (
  <Dorpdown {...args} />
);

export const MoneyImage = Template.bind({});
MoneyImage.args = {
  label: 'language',
};
