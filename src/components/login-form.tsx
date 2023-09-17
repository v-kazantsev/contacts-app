import { LoginFormValues, LoginFormErrors } from '@/types';
import { VStack, Center, Container, Box, Heading, FormControl, FormLabel, Button, Input, FormErrorMessage } from '@chakra-ui/react';
import { ERROR_EMPTY_FIELD } from '@/config/constants';

type Props = {
  values: LoginFormValues
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: VoidFunction;
  submitting: boolean;
  errors: LoginFormErrors;
}

export const LoginForm = ({ values, onChange, onSubmit, submitting, errors }: Props) => {
  const { email, password } = values || {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  }
  return (
  <VStack>
    <Center height="100vh">
      <Container maxW="500px" my="auto">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Авторизация</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors?.email}>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" placeholder="Email" value={email} onChange={onChange} />
              <FormErrorMessage>{ERROR_EMPTY_FIELD}</FormErrorMessage>
            </FormControl>
            <FormControl mt={6} isInvalid={errors?.password}>
              <FormLabel>Пароль</FormLabel>
              <Input name="password" type="password" placeholder="*******" value={password} onChange={onChange} />
              <FormErrorMessage>{ERROR_EMPTY_FIELD}</FormErrorMessage>
            </FormControl>
            <Button width="full" mt={4} type="submit" colorScheme="blue" isDisabled={submitting} isLoading={submitting}>
              Отправить
            </Button>
          </form>
        </Box>
      </Box>
      </Container>
    </Center>
  </VStack>
)};
