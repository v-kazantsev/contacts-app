import { Spinner } from '@chakra-ui/react';
import { Contacts } from '@/components/contacts';
import { useAppSelector } from '@/hooks/use-app-selector';
import { contactsSelector } from '@/features/contacts/selectors/contacts-selector';

export const ContactsView = () => {
  const contacts = useAppSelector(contactsSelector);
  const { list, isLoading } = contacts || {};
  return isLoading ? <Spinner /> : <Contacts contacts={list} />
};
