import type { Meta, StoryObj } from '@storybook/react';

import Divider from '@/components/atoms/Divider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Divider> = {
    title: 'Atoms/Divider',
    component: Divider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
    args: {
        children: 'OR',
    },
};

export const NoText: Story = {};
