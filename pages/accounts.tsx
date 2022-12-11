import { dehydrate, QueryClient } from '@tanstack/react-query';
import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import NavLink from '@components/molecules/NavLink';
import { ROUTER } from '@constants/router';
import Theme from '@components/particles/Theme';

const Accounts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>accounts</title>
      </Head>
      <NavLink
        href={ROUTER.LOGIN}
        backgroundColor={Theme.grey300}
        icon={{ type: 'UserCircle' }}
        // isActive={true}
      >
        いい加減かい
      </NavLink>
    </div>
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
