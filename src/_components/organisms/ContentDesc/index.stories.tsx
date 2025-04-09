import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import { ContentDescription } from '.';
import { Grid } from '@mui/material';

export default {
  title: 'Organisms/ContentDescription',
  component: ContentDescription,
};

const Template: ComponentStory<typeof ContentDescription> = (args) => (
  <Grid height={'100vh'} width='60vw'>
    <ContentDescription/>
  </Grid>
);

export const Content = Template.bind({});
Content.args = {};
