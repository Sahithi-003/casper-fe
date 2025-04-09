import { Grid } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import TemplatesGrid from '.';
import { templatesData } from '../../../core-utils/constants';
export default {
  title: 'organisms/TemplatesGrid',
  component: TemplatesGrid,
} as ComponentMeta<typeof TemplatesGrid>;

const Template: ComponentStory<typeof TemplatesGrid> = (args: any) => (
  <Grid width="1200px" height="90vh">
    <TemplatesGrid {...args} />
  </Grid>
);

export const TemplateGrid = Template.bind({});
TemplateGrid.args = {
  templatesData: templatesData,
  onSelectionTemplate: (selectedTemplate) => {
    console.log(selectedTemplate);
  },
};
