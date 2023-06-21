import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from '@/components/atoms/MenuItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {
  args: {
    children: 'Sign out',
  },
};
