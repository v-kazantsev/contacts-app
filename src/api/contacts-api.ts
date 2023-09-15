import { ContactsApi as ContactsApiType } from '@/types';
import { apiInstance } from './api-instance';
import { BASE_URL } from '@/config/constants';

export const ContactsApi: ContactsApiType = {
  getContacts: () => apiInstance().get(`${BASE_URL}/contacts`)
};
