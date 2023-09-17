import { Contact } from '@/types';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, IconButton, } from '@chakra-ui/react';

type Props = {
  contact: Contact;
  onDelete: (id: string) => void;
  onOpen: VoidFunction;
};

export const ContactCard = ({ contact, onDelete, onOpen }: Props) => {
  const { name, email, phone, id } = contact || {};
  return (
    <Card size='sm'>
      <CardHeader>
        <Heading size='md'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text textStyle="p1">Email: {email}</Text>
        <Text textStyle="p1">Телефон: {phone}</Text>
      </CardBody>
      <CardFooter>
        <HStack spacing="16px">
          <IconButton aria-label='edit' icon={<EditIcon />} colorScheme='blue' onClick={onOpen} />
          <IconButton aria-label='delete' icon={<DeleteIcon />} colorScheme='red' onClick={() => onDelete(id)} />
        </HStack>
      </CardFooter>
    </Card>
)};
