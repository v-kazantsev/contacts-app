import { FormControl, FormControlProps, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';

type Props = {
  label?: string;
  error?: string;
  helperMessage?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  type?: string;
} & FormControlProps;

export const TextField = ({ label, error, helperMessage, value, onChange, name, type = 'text' }: Props) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input type={type} name={name} value={value} onChange={onChange} />
    {error ? <FormErrorMessage>{error}</FormErrorMessage> : <FormHelperText>{helperMessage}</FormHelperText>}
  </FormControl>
);
