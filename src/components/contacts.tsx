import { Contact, ContactFormValues } from '@/types';
import {
  Center,
  Container,
  ListItem,
  UnorderedList,
  Heading,
  useDisclosure,
  Button,
  HStack,
  Input
} from '@chakra-ui/react';
import { Modal } from '@/components/modal';
import { ContactForm } from '@/components/contact-form';
import { ContactCard } from '@/components/contact-card';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { deleteContact } from '@/features/contacts/actions';


type Props = {
  contacts: Array<Contact>;
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Contacts = ({ contacts, value, onChange }: Props) => {
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
      <HStack spacing={0}>
        <Input value={value} onChange={onChange} />
      </HStack>
      <UnorderedList styleType="none">
        {(contacts || []).map((contact) => (
          <ListItem key={contact.id} mb="12px">
            <ContactCard contact={contact} onDelete={onDelete} />
          </ListItem>
        ))}
        <Button aria-label='add' leftIcon={<PlusSquareIcon />} onClick={onOpen} colorScheme='teal'>Добавить контакт</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ContactForm onClose={onClose} initialValues={initialValues } />
        </Modal>
      </UnorderedList>
    </Container>
  </Center>
)};
