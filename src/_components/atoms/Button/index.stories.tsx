import { Box, styled } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ButtonComponent from './index'

export default {
  title: 'atoms/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ButtonComponent>

const StyledButton = styled(ButtonComponent)({
    borderColor:'#5573E9',
    borderRadius: '8px',
    paddingTop: '5px',
    fontWeight: '600',
    height: '40px',
    textTransform: 'none',
  })

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <Box>
    <StyledButton
      {...args}
    />
  </Box>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'outlined',
  label: 'Regenerate Response',
  textVariant: 'subtitle2',
  width: '15%',
  onClick: () => window.alert('Hello!!'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'contained',
  label: 'Compose',
  textVariant: 'subtitle2',
  buttonColor:'#5573E9',
  width: '7%',
  onClick: () => window.alert('Hello!!'),
}