import type { Meta, StoryObj } from '@storybook/react';

import TextInput from '@/components/atoms/TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextInput> = {
    title: 'Atoms/TextInput',
    component: TextInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
    args: {
        placeholder: 'Username',
    },
};

export const Error: Story = {
    args: {
        placeholder: 'Username',
        error: true,
    },
};
