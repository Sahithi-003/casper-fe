import React from 'react';
import { ComponentStory } from '@storybook/react';
import AIOutputTab from './index';

export default {
  title: 'Organisms/AIOutputTab',
  component: AIOutputTab,
};

const Template: ComponentStory<typeof AIOutputTab> = () => <AIOutputTab/>;

export const aIOutputTab = Template.bind({});
