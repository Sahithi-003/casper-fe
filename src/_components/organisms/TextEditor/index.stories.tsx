import React from 'react';
import { ComponentStory } from '@storybook/react';
import TextEditor from './index';

export default {
  title: 'Organisms/TextEditor',
  component: TextEditor,
};

const Template: ComponentStory<typeof TextEditor> = () => <TextEditor />;

export const textEditor = Template.bind({});
textEditor.args = {};
