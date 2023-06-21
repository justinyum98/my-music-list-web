import type { Meta, StoryObj } from '@storybook/react';

import InputLabel from '@/components/atoms/InputLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputLabel> = {
  title: 'Atoms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Primary: Story = {
  args: {
    label: 'Username',
  },
};
