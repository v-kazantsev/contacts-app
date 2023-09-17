import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchInput as UiSearchInput } from '@/ui-elements/search-input';

type Story = StoryObj<typeof UiSearchInput>;

const meta = {
  title: 'UIElements/SearchInput',
  component: UiSearchInput,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UiSearchInput>;

export default meta;

const Input = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return <UiSearchInput onChange={handleChange} value={value}  />;
};

export const SearchInput: Story = {
  render: (args) => (
    <div style={{ padding: '12px', width: '400px' }}>
      <Input {...args} />
    </div>
  ),
};