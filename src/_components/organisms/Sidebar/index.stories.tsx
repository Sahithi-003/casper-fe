import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DocumentsPage from './index'

export default {
  title: 'pages/DocumentsPage',
  component: DocumentsPage,
} as ComponentMeta<typeof DocumentsPage>

const Template: ComponentStory<typeof DocumentsPage> = (args) => <DocumentsPage />

export const Primary = Template.bind({})
