import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideMenuItem from './index'
import template from '../../../../public/images/templates.png'

export default {
  title: 'Molecules/IconWithTypography',
  component: SideMenuItem,
} as ComponentMeta<typeof SideMenuItem>

const Template: ComponentStory<typeof SideMenuItem> = (args) => <SideMenuItem title={"Dashboard"} muiIcon={<img src={template} alt="h" />} />

export const Primary = Template.bind({})
