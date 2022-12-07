import { dehydrate, QueryClient } from '@tanstack/react-query';
import InvestmentAccountRepository from 'lib/api/accounts';
import React from 'react';
import { useAtom } from 'jotai';
import { accountQueryParamsAtom } from 'jotaiAtoms/accountQueryParamsAtom';
import { useGetAccountQuery } from '@hooks/accounts/useGetAccountQuery';

function InvestmentList() {
  const [test, setTest] = useAtom(accountQueryParamsAtom);
  const { data } = useGetAccountQuery(test);
  console.log('data', data);

  return (
    <div>
      <div>{test.pageNum}</div>
      <button
        onClick={() =>
          setTest(prevTest => ({ ...prevTest, pageNum: prevTest.pageNum + 1 }))
        }
      >
        atom num 증가
      </button>
    </div>
  );
}

export default InvestmentList;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['accountsList'], async () => {
    const result = await InvestmentAccountRepository.getInvestmentAccount({
      pageNum: 1,
    });
    return result.data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
