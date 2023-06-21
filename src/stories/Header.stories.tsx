import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/organisms/Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      image: 'https://picsum.photos/200',
    },
  },
};
