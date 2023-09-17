import { ListItem, useDisclosure } from '@chakra-ui/react';
import { ContactCard, ContactForm, Modal } from '@/components';
import { Contact } from '@/types';

type Props = {
  contact: Contact;
  onDelete: (id: string) => void;
}

export const ContactsListItem = ({ contact, onDelete }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <ListItem mb="12px">
      <ContactCard contact={contact} onDelete={onDelete} onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactForm onClose={onClose} initialValues={contact} />
      </Modal>
    </ListItem>
  );
};
