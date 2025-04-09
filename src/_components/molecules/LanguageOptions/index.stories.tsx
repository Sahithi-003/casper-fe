import React from 'react';
import { ComponentStory } from '@storybook/react';
import LanguageOptions from './index';
import Icon from '../../../../public/images/Icon.png';

export default {
  title: 'molecules/LanguageDropdown',
  component: LanguageOptions,
};

const Template: ComponentStory<typeof LanguageOptions> = (args) => (
  <LanguageOptions {...args} />
);

export const SelectLanguage = Template.bind({});
SelectLanguage.args = {
};
