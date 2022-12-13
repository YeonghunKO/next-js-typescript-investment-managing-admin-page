import { dehydrate, QueryClient } from '@tanstack/react-query';
import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { ACCOUNTS_DATA } from 'data/accounts';
import Layout from '@components/organisms/Layout';

const Accounts: NextPage = () => {
  return (
    <>
      <Head>
        <title>accounts</title>
      </Head>
      <Layout {...ACCOUNTS_DATA}>
        <div>accounts list</div>
      </Layout>
    </>
  );
};

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  const cookie = req.headers.cookie?.split('=')[1];

  const getAccountsList = async () => {
    const result = await axios.get(
      'http://localhost:4000/accounts?_expand=user&_page=1&_limit=20',
      {
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + cookie,
        },
      }
    );

    return result.data;
  };

  await queryClient.prefetchQuery(['accountsList'], getAccountsList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
