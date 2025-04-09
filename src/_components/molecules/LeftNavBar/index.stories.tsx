import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextIcon } from '.';
import youtube from '../../../../public/images/youtube.png';

export default {
  title: 'molecules/TextwithIcon',
  component: TextIcon,
};

const Template: ComponentStory<typeof TextIcon> = (args) => (
  <TextIcon {...args} />
);

export const Temp1 = Template.bind({});
Temp1.args = {
  icon: youtube,
  selected: false,
  label: 'Youtube Descriptions',
  color: '#A5A5A6',
  textVariant: 'subtitle1',
};
