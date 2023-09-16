import { Contact, ContactsApi as ContactsApiType } from '@/types';
import { apiInstance } from './api-instance';
import { BASE_URL } from '@/config/constants';

export const ContactsApi: ContactsApiType = {
  getContacts: () => apiInstance().get(`${BASE_URL}/contacts`),
  editContact: (contact: Contact) => apiInstance().patch(`${BASE_URL}/contacts/${contact.id}`, contact),
  addContact: (contact: Contact) => apiInstance().post(`${BASE_URL}/contacts`, contact),
  deleteContact: (id: string) => apiInstance().delete(`${BASE_URL}/contacts/${id}`),
};
