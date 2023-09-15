import { AxiosResponse } from 'axios';

export type LoginFormValues = {
  email: string;
  password: string;
}

export type LoginFormErrors = {
  email: boolean;
  password: boolean;
}

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type ResponseAPI<Data> = {
  success: true;
  data: Data;
}

export type ContactsApi = {
  getContacts(): Promise<AxiosResponse<ResponseAPI<Array<Contact>>>>;
}

export type ContactFormValues = Omit<Contact, 'id'>;
