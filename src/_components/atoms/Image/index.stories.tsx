import * as React from 'react';
import { ComponentStory } from '@storybook/react'
import { Image } from '.';
import vector from '../../../../public/images/Vector.png';
import youtube from '../../../../public/images/youtube.png';

export default {
  title: 'atoms/Image',
  component: Image,
};

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
)

export const MoneyImage = Template.bind({})
MoneyImage.args = {
  source: vector,
  alt: "illustration"
}
