import { Contact, ContactFormValues } from '@/types';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { Modal } from '@/components/modal';
import { ContactForm } from '@/components/contact-form';
import { useFormInput } from '@/hooks/use-form-input';

type Props = {
  contact: Contact;
};

export const ContactCard = ({ contact }: Props) => {
  const { name, phone, email } = contact;
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { values, onChange } = useFormInput<ContactFormValues>({ name, phone, email })
  return (
  <>
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
          <IconButton aria-label='delete' icon={<DeleteIcon />} colorScheme='red' />
        </HStack>
      </CardFooter>
    </Card>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm onClose={onClose} values={values} onChange={onChange} />
    </Modal>
  </>
)};
