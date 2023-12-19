import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@igt-ui/react'

export default {
  title: 'Surface/Tooltip',
  component: Tooltip,
  args: {
    date: '26 de Agosto',
    isAvailable: true,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
