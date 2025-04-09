import { Grid } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import TopNavBar from '.';
export default {
  title: 'organisms/TopNavBar',
  component: TopNavBar,
  argTypes: { onMoreClick: { action: 'more clicked' } },
} as ComponentMeta<typeof TopNavBar>;

const Template: ComponentStory<typeof TopNavBar> = (args: any) => (
  <Grid width="1000px">
    <TopNavBar {...args} />
  </Grid>
);

export const TopNavBarComponent = Template.bind({});
TopNavBarComponent.args = {
  onSelection: (index) => console.log(index),
  onFileNameChange: (event) => console.log(event.target.value),
  activeIndex: 1,
};
