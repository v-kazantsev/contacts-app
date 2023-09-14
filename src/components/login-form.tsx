import { VStack, Center, Container, Box, Heading, FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

export const LoginForm = () => (
<VStack>
    <Center height="100vh">
      <Container maxW="500px" my="auto">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Авторизация</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Пароль</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button width="full" mt={4} type="submit" colorScheme="blue">
              Отправить
            </Button>
          </form>
        </Box>
      </Box>
      </Container>
    </Center>
  </VStack>
);
