import { extendTheme } from '@chakra-ui/react';
import { typography } from '@/styles/custom-theme/typography';

export const theme = extendTheme({
  // colors,
  textStyles: typography,
});