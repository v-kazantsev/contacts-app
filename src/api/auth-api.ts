import { AuthApi as AuthApiType } from '@/types';
import { apiInstance } from './api-instance';
import { BASE_URL } from '@/config/constants';

export const AuthApi: AuthApiType = {
  login: () => apiInstance().get(`${BASE_URL}/login`),
};
