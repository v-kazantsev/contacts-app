import { InputProps } from '@/types';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightElement,
  InputGroupProps
} from '@chakra-ui/react';

export const SearchInput = ({ value, onChange, ...inputGroupProps }: InputProps & InputGroupProps) => (
  <InputGroup mb="24px" pl="12px" {...inputGroupProps }>
    <Input value={value} onChange={onChange} placeholder='Поиск' />
    <InputRightElement>
      <SearchIcon color='teal' />
    </InputRightElement>
  </InputGroup>
);
