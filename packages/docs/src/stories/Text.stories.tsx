import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@mattmax-solutions-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'md',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
