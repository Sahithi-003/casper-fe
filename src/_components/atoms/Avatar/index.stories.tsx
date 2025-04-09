import React from 'react';
import Avatar from '.';
import { AvatarProps } from '.';
import { Story } from '@storybook/react/types-6-0';
import CarrierGroupImage from '../../../../public/carrier_groups.png';
export default {
  component: Avatar,
  title: 'atoms/Avatar',
};

const AvatarStoryTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const avatarWithLabel = AvatarStoryTemplate.bind({});
avatarWithLabel.args = {
  alt: 'Amy',
  height: '32px',
  width: '32px',
  backgroundColor: '#056AD0',
};

export const avatar = AvatarStoryTemplate.bind({});
avatar.args = {
  alt: '1',
  height: '30px',
  width: '30px',
  backgroundColor: '#FFFFFF',
  color: '#7C98B6',
  border: '0.1px solid #7C98B6',
};

export const avatarWithLabelSquare = AvatarStoryTemplate.bind({});
avatarWithLabelSquare.args = {
  alt: 'Amy',
  variant: 'square',
  height: '32px',
  width: '32px',
  backgroundColor: '#056AD0',
};

export const avatarWithLabelRounded = AvatarStoryTemplate.bind({});
avatarWithLabelRounded.args = {
  alt: 'Amy',
  variant: 'rounded',
  height: '32px',
  width: '32px',
  backgroundColor: '#056AD0',
};
