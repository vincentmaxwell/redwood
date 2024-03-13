import type { Meta, StoryObj } from '@storybook/react'

import LoggedInLayout from './LoggedInLayout'

const meta: Meta<typeof LoggedInLayout> = {
  component: LoggedInLayout,
}

export default meta

type Story = StoryObj<typeof LoggedInLayout>

export const Primary: Story = {}
