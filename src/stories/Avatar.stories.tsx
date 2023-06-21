import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/components/atoms/Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: 'https://picsum.photos/200',
    width: 200,
    alt: 'Profile picture',
  },
};
