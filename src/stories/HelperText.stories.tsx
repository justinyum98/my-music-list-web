import type { Meta, StoryObj } from '@storybook/react';

import HelperText from '../components/atoms/HelperText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof HelperText> = {
    title: 'Atoms/HelperText',
    component: HelperText,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Primary: Story = {
    args: {
        children: 'Username must be between 3 and 30 characters long',
    },
};

export const Error: Story = {
    args: {
        children: 'Username is too long.',
        error: true,
    },
};
