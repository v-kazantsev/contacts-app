import type { Meta, StoryObj } from '@storybook/react';
import noop from 'lodash/noop';
import { ContactCard as ContactCardComponent } from '@/components/contact-card';

const contact = {
  id: "1",
  name: "John Doe",
  email: "test@test.com",
  phone: "890911111111"
}

type Story = StoryObj<typeof ContactCardComponent>;

const meta = {
  title: 'Components/ContactCard',
  component: ContactCardComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500, padding: '40px 10px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactCardComponent>;

export default meta;

export const ContactCard: Story = {};
ContactCard.args = {
  contact,
  onDelete: noop,
};