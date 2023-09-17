import { useEffect } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { ContactsView } from '@/views/contacts-view';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { getContacts } from '@/features/contacts/actions';
import { authActions } from '@/features/auth/slice'
import { useNavigate } from 'react-router-dom';

export const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <Box>
      <Flex justify="flex-end" borderBottom="1px solid gray" py="12px" pr="24px" mb="24px">
        <Button onClick={handleLogout} colorScheme='blue'>ВЫХОД</Button>
      </Flex>
      <ContactsView />
    </Box>
  );
};
