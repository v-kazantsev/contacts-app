import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/use-app-selector';
import { authSelector } from '@/features/auth/selectors/auth-selector';
import { isNilOrEmpty } from '@/helpers/is-nil-or-empty';
import { Spinner } from '@chakra-ui/spinner';

export const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
  const { isLoading, token } = useAppSelector(authSelector);
  if (isLoading) return <Spinner />;
  return isNilOrEmpty(token) ? <Navigate to="/login" /> : children;
};
