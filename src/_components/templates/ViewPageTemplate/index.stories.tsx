import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ViewPageTemplate from '.';

export default {
  title: 'Templates/ViewPageTemplate',
  component: ViewPageTemplate,
} as ComponentMeta<typeof ViewPageTemplate>;

const Template: ComponentStory<typeof ViewPageTemplate> = (args) => (
  <ViewPageTemplate {...args} />
);

export const viewPageTemplate = Template.bind({});

viewPageTemplate.args = {
  header: <div>Header</div>,
  left: <div>Left Section</div>,
  right: <div>Right Section</div>,
};
