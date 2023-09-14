import { useState } from 'react';
import { LoginForm } from '@/components/login-form';
import { LoginFormValues } from '@/types';

const formValues = {
  email: "",
  password: ""
}

export const LoginView = () => {
  const [values, setValues] = useState<LoginFormValues>(formValues);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const fakeLogin = async ({ email, password }: LoginFormValues) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email !== "" && password !== "") {
          resolve();
        } else {
          reject("Поле не может быть пустым");
        }
      }, 2000);
    });
  };
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fakeLogin(values);
    } catch (error) {
      setError(error as string)
    } finally {
      setSubmitting(false);
      setValues({
        email: "",
        password: ""
      });
    }
  };

  return <LoginForm values={values} onChange={handleInputChange} error={error} onSubmit={handleSubmit} submitting={submitting} />
};
