import { useState } from 'react';

export const useFormInput = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, onChange}
};
