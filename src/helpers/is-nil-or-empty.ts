import isNil from 'lodash/isNil';

export const isNilOrEmpty = (value: string | null | undefined) => isNil(value) || value === "";
