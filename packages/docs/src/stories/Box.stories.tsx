import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@igt-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing Box component</Text>
      </>
    ),
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
