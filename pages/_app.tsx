import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '@components/particles/Theme';
import GlobalStyle from '@components/particles/GlobalStyles';
import { RecoilRoot } from 'recoil';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRef, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={true} />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
