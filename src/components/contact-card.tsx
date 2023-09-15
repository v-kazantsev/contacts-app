import { Contact } from '@/types';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, IconButton } from '@chakra-ui/react';

type Props = {
  contact: Contact;
};

export const ContactCard = ({ contact }: Props) => {
  const { name, phone, email } = contact;
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
        <IconButton aria-label='edit' icon={<EditIcon />} colorScheme='blue' />
        <IconButton aria-label='delete' icon={<DeleteIcon />} colorScheme='red' />
      </HStack>
    </CardFooter>
  </Card>
)};
