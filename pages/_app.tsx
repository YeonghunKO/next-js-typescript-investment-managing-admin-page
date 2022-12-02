import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '@components/particles/Theme';
import GlobalStyle from '@components/particles/GlobalStyles';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
