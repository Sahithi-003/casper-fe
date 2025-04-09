import React from 'react';
import { ComponentStory } from '@storybook/react';
import Toolbar from './index';

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
};

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args}/>;

export const toolbar = Template.bind({});
toolbar.args = {
  
};
