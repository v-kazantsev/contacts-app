import { Contact } from '@/types';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { Modal } from '@/components/modal';
import { ContactForm } from '@/components/contact-form';

type Props = {
  contact: Contact;
  onDelete: (id: string) => void;
};

export const ContactCard = ({ contact, onDelete }: Props) => {
  const { name, email, phone, id } = contact || {};
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Card size='sm'>
      <>
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ContactForm onClose={onClose} initialValues={contact} />
        </Modal>
      </>
    </Card>
)};
