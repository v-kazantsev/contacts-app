import { isNilOrEmpty } from '@/helpers/is-nil-or-empty';

describe('возвращает правильное значение', () => {
  test('когда undefined', () => {
    expect(isNilOrEmpty(undefined)).toBeTruthy();
  });
  test('когда null', () => {
    expect(isNilOrEmpty(null)).toBeTruthy();
  });
  test('когда пустая строка', () => {
    expect(isNilOrEmpty('')).toBeTruthy();
  });
  test('когда string', () => {
    expect(isNilOrEmpty('abcdef')).toBeFalsy();
  });
});
