import { Button, Card, CardBody, Flex, VStack } from '@chakra-ui/react';
import { v1 as uuid } from 'uuid';
import { TextField } from '@/ui-elements/text-field';
import { Contact, ContactFormValues } from '@/types';
import { useFormInput } from '@/hooks/use-form-input';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { addContact, editContact } from '@/features/contacts/actions';

type Props = {
  onClose: VoidFunction;
  initialValues: ContactFormValues;
}

export const ContactForm = ({ onClose, initialValues }: Props) => {
  const dispatch = useAppDispatch();
  const { values, onChange } = useFormInput<ContactFormValues>(initialValues);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      values.id ? dispatch(editContact(values as Contact)) : dispatch(addContact({...values, id: uuid()}));
      onClose();
    } catch (error) {
      console.log(error)
    }
  }
  const { name, email, phone } = values || {};
  return (
    <Card mt="6px">
      <CardBody>
        <form onSubmit={onSubmit}>
          <VStack spacing="12px">
          <TextField name="name" label="Имя" value={name} onChange={onChange} />
          <TextField name="email" label="Email" value={email} onChange={onChange}/>
          <TextField name="phone" label="Телефон" value={phone} onChange={onChange} />
          <Flex mt="12px">
            <Button type="button" onClick={onClose} mr="12px">Отмена</Button>
            <Button type="submit" colorScheme="blue">Сохранить</Button>
          </Flex>
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};
