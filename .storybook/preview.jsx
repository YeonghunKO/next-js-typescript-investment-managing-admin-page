import { ThemeProvider } from 'styled-components';
import { Theme } from '@components/particles/Theme';
import { GlobalStyles } from '@components/particles/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
