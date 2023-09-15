import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Center,
  Container,
  ListItem,
  UnorderedList,
  Heading,
  IconButton,
  HStack,
  Text
} from '@chakra-ui/react'

export const Contacts = () => (
  <Center>
    <Container maxW="50%">
      <Heading mb="40px">Список контактов</Heading>
      <UnorderedList styleType="none">
        <ListItem>
          <HStack spacing="16px">
            <IconButton aria-label='edit' icon={<EditIcon />} />
            <IconButton aria-label='delete' icon={<DeleteIcon />} />
            <Text>1 Contact</Text>
          </HStack>
        </ListItem>
      </UnorderedList>
    </Container>
  </Center>
);
