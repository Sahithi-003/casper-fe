import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SavedDocsTable from './index'

export default {
  title: 'organisms/SavedDocumentsTable',
  component: SavedDocsTable,
} as ComponentMeta<typeof SavedDocsTable>

const Template: ComponentStory<typeof SavedDocsTable> = () => <SavedDocsTable />

export const Primary = Template.bind({})
