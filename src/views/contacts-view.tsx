import { useState } from 'react';
import uniq from 'lodash/uniq';
import { Spinner } from '@chakra-ui/react';
import { Contacts } from '@/components/contacts';
import { useAppSelector } from '@/hooks/use-app-selector';
import { contactsSelector } from '@/features/contacts/selectors/contacts-selector';
import { Contact } from '@/types';
import { useDebounce } from '@/hooks/use-debounce';

export const ContactsView = () => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter);
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => setFilter((e.target as HTMLInputElement).value);
  const contacts = useAppSelector(contactsSelector);
  const { list, isLoading } = contacts || {};
  const filterContacts = (list: Array<Contact>) => {
    const filteredNames = (list || []).filter(({ name }) => name?.toLowerCase().includes(filter.toLowerCase()));
    const filteredEmails = (list || []).filter(({ email }) => email?.toLowerCase().includes(filter));
    const filteredPhones = (list || []).filter(({ phone }) => phone?.includes(filter));
    return uniq([...filteredNames, ...filteredEmails, ...filteredPhones]);
  };
  return isLoading ? <Spinner /> : <Contacts contacts={debouncedFilter === "" ? list : filterContacts(list)} value={filter} onChange={handleChange} />
};
