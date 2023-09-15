import { LoginPage } from '@/pages/login-page';
import { ContactsPage } from '@/pages/contacts-page';

export const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />
  }
];
