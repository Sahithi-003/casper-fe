import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ViewPage from '.';
export default {
  title: 'pages/ViewPage',
  component: ViewPage,
} as ComponentMeta<typeof ViewPage>;

const Template: ComponentStory<typeof ViewPage> = () => <ViewPage />;

export const viewPage = Template.bind({});

viewPage.args = {};