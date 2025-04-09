import { Story } from '@storybook/react';
import React from 'react';
import { TypographyComponent, TypographyComponentProps } from '.';

export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
};

const Template: Story<TypographyComponentProps> = (args) => (
  <TypographyComponent {...args} />
);
export const heading1 = Template.bind({})
heading1.args = {
  variant: 'heading1',
  children: 'Heading1',
  color: 'text_color.high_emphasis'
}
export const heading2 = Template.bind({})
heading2.args = {
  variant: 'heading2',
  children: 'Heading2',
  color: 'text_color.low_emphasis'
}
export const heading3 = Template.bind({})
heading3.args = {
  variant: 'heading3',
  children: 'Heading3',
  color: 'text_color.medium_emphasis'
}
export const subtitle1 = Template.bind({})
subtitle1.args = {
  variant: 'subtitle1',
  children: 'Subtitle1',
  color: 'primary.primary_50'
}
export const subtitle2 = Template.bind({})
subtitle2.args = {
  variant: 'subtitle2',
  children: 'Subtitle2',
  color: 'primary.primary_100'
}
export const body1 = Template.bind({})
body1.args = {
  variant: 'body1',
  children: 'Body1',
  color: 'primary.primary_200'
}
export const body2 = Template.bind({})
body2.args = {
  variant: 'body2',
  children: 'Body2',
  color: 'primary.primary_300'
}
export const caption1 = Template.bind({})
caption1.args = {
  variant: 'caption1',
  children: 'Caption1',
  color: 'text_color.interactive'
}
export const caption2 = Template.bind({})
caption2.args = {
  variant: 'caption2',
  children: 'Caption2',
  color: 'success_color.success_500'
}
export const overline = Template.bind({})
overline.args = {
  variant: 'overline',
  children: 'Overline',
  color: 'warning_color.warning_500'
}