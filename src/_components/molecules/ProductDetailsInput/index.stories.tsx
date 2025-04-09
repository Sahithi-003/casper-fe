import React from 'react';
import { ComponentStory } from '@storybook/react';
import ProductDetailsInput from './index';
import star from '../../../../public/images/star.png';
import Icon from '../../../../public/images/Icon.png';

export default {
  title: 'molecules/ContentInputField',
  component: ProductDetailsInput,
};

const Template: ComponentStory<typeof ProductDetailsInput> = (args) => (
  <ProductDetailsInput {...args} />
);

const ParagraphTemp: ComponentStory<typeof ProductDetailsInput> = (args) => (
  <ProductDetailsInput {...args} />
);

const KeywordTemp: ComponentStory<typeof ProductDetailsInput> = (args) => (
  <ProductDetailsInput {...args} />
);

export const Voicetone = Template.bind({});
Voicetone.args = {
  placeholder: 'Enter tone of voice...',
  wordCount: 80,
  TypoChildren: 'Tone of voice',
};

export const Paragraph = ParagraphTemp.bind({});
Paragraph.args = {
  placeholder: 'Write content...',
  wordCount: 600,
  TypoChildren: 'What is your Paragraph about?',
};

export const Keyword = KeywordTemp.bind({});
Keyword.args = {
  placeholder: 'Write keywords...',
  wordCount: 80,
  TypoChildren: 'Keywords to include!',
  bottom: 'e.g Etherum, Bitcoin',
};
