import AccountListBoard from '@components/organisms/AccountListBoard';
import Layout from '@components/organisms/Layout';
import { useGetAccountQuery } from '@hooks/accounts/useGetAccountQuery';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';

const Account = () => {
  const { accountListBoard, ...restData } = useRecoilValue(accountDataState);
  
  const { data,isError,isLoading } = useGetAccountQuery();

  return (
    <Layout {...restData}>
      <AccountListBoard isError={isError} isLoading={isLoading} accountTableBody={data} {...accountListBoard} />
    </Layout>
  );
};

export default Account;
