import { LoginPage, ContactsPage, MainPage } from '@/pages';

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />
  }
];
