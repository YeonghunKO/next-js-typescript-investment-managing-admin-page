import Layout from '@components/organisms/Layout';
import { ACCOUNTS_DATA } from 'data/accounts';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const users: NextPage = () => {
  return (
    <>
      <Head>
        <title>사용자목록</title>
      </Head>
      <Layout {...ACCOUNTS_DATA}>
        <div>사용자목록</div>
      </Layout>
    </>
  );
};

export default users;
