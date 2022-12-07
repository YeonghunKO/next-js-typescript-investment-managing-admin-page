import { useQuery } from '@tanstack/react-query';
import type { InvestmentAccountProps } from '@type/common';
import InvestmentAccount from 'lib/api/accounts';

export const useGetAccountQuery = (
  accountQueryParams: InvestmentAccountProps
) => {
  return useQuery(
    ['accountsList', accountQueryParams],
    () => {
      return InvestmentAccount.getInvestmentAccount(accountQueryParams);
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};

// keepPreviousData
// 이게 없으면 다른 페이지로 갔다가 돌아왔을때 그 페이지가 새로운 querykey로 인식
// 그래서 loading = true로 되면서 데이터를 새로 불러오므로 빈 페이지였다가 data가 들어오면 페이지 랜더링 됨
// keepPreviousData = true이면 이전에 loading 되었던 page query를 그대로 유지한 상태로 그페이지에 해당하는 데이터를 서버에서 불러옴
// staleTime:2000인 경우는 20초안에 다시 그 페이지로 올경우 데이터 loading하지 않음

// The data from the last successful fetch available
// while new data is being requested, even though the query key has changed.
