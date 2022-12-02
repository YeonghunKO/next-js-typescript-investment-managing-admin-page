import { ThemeProvider } from 'styled-components';
import Theme from '../components/particles/Theme';
import GlobalStyles from '../components/particles/GlobalStyles';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
    },
  },
});

const withThemeProvider = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Story />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
