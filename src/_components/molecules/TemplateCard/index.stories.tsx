import { Grid } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import TemplateCard from '.';
import facebook from './../../../../public/images/templates/facebook.png';

export default {
  title: 'molecules/TemplateCard',
  component: TemplateCard,
  argTypes: { onClick: { action: 'box-clicked' } },
} as ComponentMeta<typeof TemplateCard>;

const Template: ComponentStory<typeof TemplateCard> = (args: any) => (
  <Grid width="241px">
    <TemplateCard {...args} />
  </Grid>
);

export const faceBootTemplate = Template.bind({});
faceBootTemplate.args = {
  image: facebook,
  templateName: 'Marketing Angles',
  templateDescription:
    'Create high converting copy for the “Primary Text” section of your facebook ads.',
};
