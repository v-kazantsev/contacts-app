import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/styles/custom-theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      chakra: {
        theme,
        enableColorModeControl: false
      }
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { theme },
    Provider: ChakraProvider,
  }),
];
export default preview;
