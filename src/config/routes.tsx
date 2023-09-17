import { LoginPage, ContactsPage, MainPage, NotFoundPage } from '@/pages';
import { PrivateRoute } from '@/components/private-route';

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
    element: <PrivateRoute><ContactsPage /></PrivateRoute>
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
];
