import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PowerModeTemplate } from '.';

export default {
  title: 'Templates/PowerModeTemplate',
  component: PowerModeTemplate,
} as ComponentMeta<typeof PowerModeTemplate>;

const Template: ComponentStory<typeof PowerModeTemplate> = (args) => (
  <PowerModeTemplate {...args} />
);

export const PowerModeTemp = Template.bind({});

PowerModeTemp.args = {
  header: <div>Header</div>,
  left: <div>Left Section</div>,
  middle: <div>Middle Section</div>,
  right: <div>Right Section</div>,
};
