import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/login-form';
import { LoginFormValues, LoginFormErrors } from '@/types';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { login } from '@/features/auth/actions/login';

const formValues = {
  email: "",
  password: ""
}

const formErrors = {
  email: false,
  password: false
}

export const LoginView = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<LoginFormValues>(formValues);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<LoginFormErrors>(formErrors);
  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const fakeLogin = async ({ email, password }: LoginFormValues) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email !== "" && password !== "") {
          dispatch(login());
          resolve();
        } else {
          reject({ email: email === "", password: password === ""});
        }
      }, 2000);
    });
  };
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fakeLogin(values);
      setValues({
        email: "",
        password: ""
      });
      setErrors(formErrors);
      navigate("/contacts");
    } catch (errors) {
      setErrors(errors as LoginFormErrors)
    } finally {
      setSubmitting(false);
    }
  };

  return <LoginForm values={values} onChange={handleInputChange} errors={errors} onSubmit={handleSubmit} submitting={submitting} />
};
