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
  data: Data;
}

export type ContactsApi = {
  getContacts(): Promise<AxiosResponse<ResponseAPI<Array<Contact>>>>;
  editContact(contact: Contact): Promise<AxiosResponse<ResponseAPI<Contact>>>;
  addContact(contact: Contact): Promise<AxiosResponse<ResponseAPI<Contact>>>;
  deleteContact(id: string): Promise<AxiosResponse<ResponseAPI<object>>>;
}

export type AuthApi = {
  login(): Promise<AxiosResponse<ResponseAPI<{ token: string }>>>;
}

export type ContactFormValues = {
  id?: string;
  name: string;
  phone: string;
  email: string;
};

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
