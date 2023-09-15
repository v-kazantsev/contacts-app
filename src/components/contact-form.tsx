import { Button, Card, CardBody, Flex, VStack } from '@chakra-ui/react';
import { TextField } from '@/ui-elements/text-field';
import { ContactFormValues } from '@/types';

type Props = {
  onClose: VoidFunction;
  values: ContactFormValues;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const ContactForm = ({ onClose, values, onChange }: Props) => {
  const { name, email, phone } = values || {};
  return (
    <Card mt="6px">
      <CardBody>
        <form>
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
