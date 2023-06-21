import type { Meta, StoryObj } from '@storybook/react';

import FormTextField from '@/components/molecules/FormTextField';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FormTextField> = {
  title: 'Molecules/FormTextField',
  component: FormTextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormTextField>;

export const Primary: Story = {
  args: {
    label: 'Username',
    helperText: 'Username must be between 3 and 30 characters.',
  },
};

export const Error: Story = {
  args: {
    label: 'Username',
    helperText: 'Username is too long.',
    error: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText:
      'Password must be at least 8 characters with at least one letter and one number.',
  },
};
