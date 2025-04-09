import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import NoDocumentsFoundCard from './index';

export default {
  title: 'molecules/NoDocumentsFoundCard',
  component: NoDocumentsFoundCard,
};

const Template: ComponentStory<typeof NoDocumentsFoundCard> = () => (
  <NoDocumentsFoundCard />
);

export const Search = Template.bind({});
Search.args = {};
