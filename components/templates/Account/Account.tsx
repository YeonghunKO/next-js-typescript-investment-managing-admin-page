import AccountListBoard from '@components/organisms/AccountListBoard';
import Layout from '@components/organisms/Layout';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';

const Account = () => {
  const data = useRecoilValue(accountDataState);
  return (
    <Layout {...data}>
      <AccountListBoard />
    </Layout>
  );
};

export default Account;
