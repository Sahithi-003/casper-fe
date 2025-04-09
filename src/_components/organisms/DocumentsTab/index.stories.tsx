import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import DocumentsTab from './index';

export default {
  title: 'organisms/DocumentsTab',
  component: DocumentsTab,
};

const Template: ComponentStory<typeof DocumentsTab> = () => (
  <DocumentsTab />
);

export const Doc = Template.bind({});
Doc.args = {};
