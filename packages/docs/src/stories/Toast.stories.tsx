import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@igt-ui/react'

export default {
  title: 'Surface/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
