import { useEffect } from 'react';
import { ContactsView } from '@/views/contacts-view';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { getContacts } from '@/features/contacts/actions';

export const ContactsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])
  return <ContactsView />;
};
