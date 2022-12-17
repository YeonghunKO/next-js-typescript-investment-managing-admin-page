import Layout from '@components/organisms/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';

const users: NextPage = () => {
  const data = useRecoilValue(accountDataState);
  return (
    <>
      <Head>
        <title>사용자목록</title>
      </Head>
      <Layout {...data}>
        <div>사용자목록</div>
      </Layout>
    </>
  );
};

export default users;
