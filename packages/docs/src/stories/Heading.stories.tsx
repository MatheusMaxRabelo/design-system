import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@mattmax-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'md',
    children: 'Custom header',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The heading will always be `h2` by default but it can be changed using the property `as`',
      },
    },
  },
}
