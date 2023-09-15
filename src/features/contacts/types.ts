import { Contact } from '@/types';

export type ContactsState = {
  list: Array<Contact>;
  isLoading: boolean;
  error?: string;
}