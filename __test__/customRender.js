import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import Theme from "@components/particles/Theme";
import GlobalStyle from "@components/particles/GlobalStyles";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function AllTheProviders({ children }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

const customRender = (ui, ...options) => {
  return render(ui, { wrapper: AllTheProviders }, options);
};

export { customRender };
