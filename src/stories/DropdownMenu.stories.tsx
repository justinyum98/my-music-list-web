import type { Meta, StoryObj } from '@storybook/react';

import DropdownMenu from '@/components/molecules/DropdownMenu';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
  args: {
    hidden: false,
    items: [
      { children: 'First item' },
      { children: 'Second item' },
      { children: 'Third item' },
    ],
  },
};
