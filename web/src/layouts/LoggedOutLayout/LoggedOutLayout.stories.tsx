import type { Meta, StoryObj } from '@storybook/react'

import LoggedOutLayout from './LoggedOutLayout'

const meta: Meta<typeof LoggedOutLayout> = {
  component: LoggedOutLayout,
}

export default meta

type Story = StoryObj<typeof LoggedOutLayout>

export const Primary: Story = {}
