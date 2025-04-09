import * as React from 'react';
import { Story } from '@storybook/react'
import {TypographyComponent} from '.'


export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
}

const Template: Story<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Typography</TypographyComponent>
)

const col ='#657084'

export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  color: col,
}

export const Body1 = Template.bind({})
Body1.args = {
  variant: 'body1',
  color: col,
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  variant: 'subtitle1',
  color: col
}

export const Caption1 = Template.bind({})
Caption1.args = {
  variant: 'caption1',
  color: col,
}