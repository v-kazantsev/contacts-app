import { Contact, ContactFormValues } from '@/types';
import {
  Center,
  Container,
  UnorderedList,
  Heading,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { Modal, ContactsListItem, ContactForm } from '@/components';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { deleteContact } from '@/features/contacts/actions';
import { SearchInput } from '@/ui-elements/search-input';

type Props = {
  contacts: Array<Contact>;
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Contacts = ({ contacts, ...inputProps }: Props) => {
  const dispatch = useAppDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const onDelete = (id: string) => dispatch(deleteContact(id));
  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    phone: ""
  }
  return (
  <Center>
    <Container maxW="40%">
      <Heading mb="40px">Список контактов</Heading>
      <SearchInput {...inputProps} />
      <UnorderedList styleType="none">
        {(contacts || []).map((contact) => (
          <ContactsListItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
        <Button aria-label='add' leftIcon={<PlusSquareIcon />} onClick={onOpen} colorScheme='teal'>Добавить контакт</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ContactForm onClose={onClose} initialValues={initialValues } />
        </Modal>
      </UnorderedList>
    </Container>
  </Center>
)};
