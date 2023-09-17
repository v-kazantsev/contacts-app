import { render, screen } from '@testing-library/react';
import { LoginForm } from '@/components/login-form';
import { noop } from 'lodash';

const values = {
  email: "",
  password: ""
}

const errors = {
  email: false,
  password: false
}

describe("Login form", () => {
  test("отображается правильно", () => {
    render(<LoginForm values={values} onChange={noop} onSubmit={noop} submitting={false} errors={errors}  />);
    expect(screen.getByRole("heading", { name: "Авторизация"})).toBeTruthy();
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText("Пароль")).toBeTruthy();
    expect(screen.getByRole('button', { name: /отправить/i})).toBeTruthy();
  })
});
