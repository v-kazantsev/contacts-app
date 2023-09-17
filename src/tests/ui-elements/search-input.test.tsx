import { render, screen } from '@testing-library/react';
import { SearchInput } from '@/ui-elements/search-input';
import { noop } from 'lodash';

describe('SearchInput', () => {
  test('Компонент отображается правильно', () => {
    render(<SearchInput value="" onChange={noop} />);
    expect(screen.getByPlaceholderText(/поиск/i)).toBeTruthy();
  })
});
