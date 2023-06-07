import type { Meta, StoryObj } from '@storybook/react';

import SignUpForm from '../components/organisms/SignUpForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SignUpForm> = {
    title: 'Organisms/SignUpForm',
    component: SignUpForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Primary: Story = {};
