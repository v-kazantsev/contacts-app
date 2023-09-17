export type AuthState = {
  token: string | null | undefined;
  isLoading: boolean;
  error?: string;
}