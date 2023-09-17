import { Box, Heading, Text } from '@chakra-ui/react'

export const NotFoundPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Страница не существует
      </Text>
      <Text color={'gray.500'} mb={6}>
        Page Not Found
      </Text>
    </Box>
  );
};
