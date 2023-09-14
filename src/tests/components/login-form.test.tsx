import { render, screen } from '@testing-library/react';
import { LoginForm } from '@/components/login-form';

describe("Login form", () => {
  test("отображается правильно", () => {
    render(<LoginForm />);
    expect(screen.getByRole("heading", { name: "Авторизация"})).toBeTruthy();
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText("Пароль")).toBeTruthy();
  })
});
