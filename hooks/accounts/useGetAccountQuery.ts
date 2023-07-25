import { handleHTTPResponseError } from "@constants/validator";
import { accountQueryParamsState } from "store/accountQueryParamsAtoms";
import { useQuery } from "@tanstack/react-query";
import type { AccountQueryParams, AccountType } from "@type/common";
import { AxiosError, AxiosResponse } from "axios";
import InvestmentAccount from "lib/api/accounts";
import { useRecoilState } from "recoil";

export const useGetAccountQuery = (
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  const initData: AxiosResponse<AccountType[], any> | undefined =
    queryClient.getQueryData(["accountsList"]);

  const [accountQueryParams, setAccountQueryParams] =
    useRecoilState<AccountQueryParams>(accountQueryParamsState);

  const info = useQuery<AxiosResponse<AccountType[]>, AxiosError<any, any>>(
    ["accountsList", accountQueryParams],
    () => {
      return InvestmentAccount.getInvestmentAccount(accountQueryParams);
    },
    {
      onError: (err) => {
        setErrorMessage && setErrorMessage(handleHTTPResponseError(err));
      },
      staleTime: 2000,
      keepPreviousData: true,
      placeholderData: initData,
    }
  );

  return { ...info, accountQueryParams, setAccountQueryParams };
};

// keepPreviousData
// 이게 없으면 다른 페이지로 갔다가 돌아왔을때 그 페이지가 새로운 querykey로 인식
// 그래서 loading = true로 되면서 데이터를 새로 불러오므로 빈 페이지였다가 data가 들어오면 페이지 랜더링 됨
// keepPreviousData = true이면 이전에 loading 되었던 page query를 그대로 유지한 상태로 그페이지에 해당하는 데이터를 서버에서 불러옴
// staleTime:2000인 경우는 20초안에 다시 그 페이지로 올경우 데이터 loading하지 않음

// The data from the last successful fetch available
// while new data is being requested, even though the query key has changed.
