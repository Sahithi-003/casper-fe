import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { NavigationBarGrid } from '.';
import { template_Sample_Data } from '../../../utils/sample_data';


export default {
  title: 'Organisms/NavigationBarGrid',
  component: NavigationBarGrid,
};

const Template: ComponentStory<typeof NavigationBarGrid> = (args) => (
  <NavigationBarGrid/>
);



export const Home = Template.bind({});
Home.args = {};
