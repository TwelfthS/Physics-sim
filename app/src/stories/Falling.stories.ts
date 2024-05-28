import type { Meta, StoryObj } from '@storybook/react'
import Falling from '../components/Falling'

const meta: Meta<typeof Falling> = {
    title: 'Main/Falling',
    component: Falling,
  }
      
  export default meta

type Story = StoryObj<typeof Falling>

export const OneH: Story = {
    args: {
        height: 100,
    }
}

export const TwoH: Story = {
    args: {
        height: 200,
    }
}