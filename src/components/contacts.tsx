import { Contact } from '@/types';
import {
  Center,
  Container,
  ListItem,
  UnorderedList,
  Heading
} from '@chakra-ui/react';
import { ContactCard } from '@/components/contact-card';

type Props = {
  contacts: Array<Contact>
}

export const Contacts = ({ contacts }: Props) => (
  <Center>
    <Container maxW="50%">
      <Heading mb="40px">Список контактов</Heading>
      <UnorderedList styleType="none">
        {(contacts || []).map((contact) => (
          <ListItem key={contact.id}>
            <ContactCard contact={contact}/>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  </Center>
);
