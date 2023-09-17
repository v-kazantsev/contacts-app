import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextField as UiTextField } from '@/ui-elements/text-field';

type Story = StoryObj<typeof UiTextField>;

const meta = {
  title: 'UIElements/TextField',
  component: UiTextField,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UiTextField>;

export default meta;

const Input = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return <UiTextField onChange={handleChange} value={value} name="test" label="Label" helperMessage="Helper Messsage"  />;
};

export const TextField: Story = {
  render: (args) => (
    <div style={{ padding: '12px', width: '400px' }}>
      <Input {...args} />
    </div>
  ),
};