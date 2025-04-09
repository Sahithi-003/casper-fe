import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {PowerPage} from '.';
export default {
  title: 'pages/PowerPage',
  component: PowerPage,
} as ComponentMeta<typeof PowerPage>;

const Template: ComponentStory<typeof PowerPage> = () => <PowerPage />;

export const powerPage = Template.bind({});

powerPage.args = {};