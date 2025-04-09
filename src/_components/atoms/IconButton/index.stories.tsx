import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import IconButtonComponent from '.';
import eyeIcon from '../../../../public/images/eye.svg';
import more from '../../../../public/icons/more.svg';

export default {
  title: 'atoms/IconButton',
  component: IconButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = (args: any) => (
  <IconButtonComponent {...args} />
);

export const iconNotSelected = Template.bind({});
iconNotSelected.args = {
  src: eyeIcon ,
  img_height: '16px',
  img_width: '16px',
  height: '32px',
  width: '32px',
  active: false,
};

export const iconSelected = Template.bind({});
iconSelected.args = {
  src:  eyeIcon ,
  img_height: '16px',
  img_width: '16px',
  height: '32px',
  width: '32px',
  active: true,
};

export const moreIcon = Template.bind({});
moreIcon.args = {
  src: more,
  img_height: '16px',
  img_width: '16px',
};

export const letterNotSelected = Template.bind({});
letterNotSelected.args = {
  letter: 'S',
  height: '32px',
  width: '32px',
  type: 'letter',
  active: false,
};

export const letterSelected = Template.bind({});
letterSelected.args = {
  letter: 'S',
  height: '32px',
  width: '32px',
  type: 'letter',
  active: true,
};
