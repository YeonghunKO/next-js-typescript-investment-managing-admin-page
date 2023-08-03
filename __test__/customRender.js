import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import Theme from "@components/particles/Theme";
import GlobalStyle from "@components/particles/GlobalStyles";
import { RecoilRoot } from "recoil";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef, useState } from "react";

function AllTheProviders({ children }) {
  const [queryClient] = useState(() => new QueryClient());

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

const customRender = (ui, options) => {
  console.log("ui", ui);
  console.log("options", options);
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender };
