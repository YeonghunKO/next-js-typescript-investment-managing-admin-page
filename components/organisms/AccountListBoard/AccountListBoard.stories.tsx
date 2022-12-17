import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { AxiosResponse } from 'axios';
import { ACCOUNTS_DATA } from 'data/accounts';
import AccountListBoard from './AccountListBoard';

const accountTableBody: AxiosResponse<any[]> = {
  data: [
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '이상해풀',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '라이츄',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '거북왕',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '성원숭',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '고스트',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '미뇽',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '버터풀',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '고스트',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '미뇽',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '버터풀',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '고스트',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '미뇽',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '버터풀',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '고스트',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '미뇽',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '꼬부기',
      },
    },
    {
      id: 4,
      userId: 15,
      uuid: '2b24c434-79cd-47df-9b65-bff5d0ac76df',
      broker_id: '288',
      status: 1,
      number: '814430126335',
      name: 'Auto Loan Account',
      assets: '571659188.85',
      payments: '380004807.22',
      is_active: true,
      created_at: '2021-12-28T21:02:09.006Z',
      updated_at: '2019-07-19T02:59:37.115Z',
      user: {
        name: '버터풀',
      },
    },
  ],
  headers: {
    'x-total-count': '30',
  },
};

export default {
  title: 'Organisms/AccountListBoard',
  component: AccountListBoard,
} as ComponentMeta<typeof AccountListBoard>;

const Template: ComponentStory<typeof AccountListBoard> = args => (
  <AccountListBoard {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  accountTableHeader: ACCOUNTS_DATA.accountListBoard.accountTableHeader,
  dropDown: ACCOUNTS_DATA.accountListBoard.dropDown,
  accountTableBody: accountTableBody,
};
