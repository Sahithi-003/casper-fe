import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { GenerateHeader } from '.';
import Vector from '../../../../public/images/Vector.png';

export default {
  title: 'molecules/GenerateHeader',
  component: GenerateHeader,
};

const Template: ComponentStory<typeof GenerateHeader> = (args) => (
  <GenerateHeader {...args} />
);

export const Temp1 = Template.bind({});
Temp1.args = {
  body: 'Paragraph Generator',
  subtitle: 'Generate paragraph that will captivate your reader!',
  width: 48,
  height: 48,
  image: Vector,
};
