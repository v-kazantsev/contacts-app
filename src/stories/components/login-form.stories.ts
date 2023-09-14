import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '@/components/login-form.tsx';

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormComponent: Story = {};