import React from 'react';
import { ComponentStory } from '@storybook/react';
import LeftFormPannel from './index';

export default {
  title: 'Organisms/LeftFormPannel',
  component: LeftFormPannel,
};

const Template: ComponentStory<typeof LeftFormPannel> = () => (
  <LeftFormPannel />
);

export const LeftPannel = Template.bind({});
LeftPannel.args = {};
