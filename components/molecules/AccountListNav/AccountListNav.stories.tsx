import { BROKERS_FORMAT, STATUS_FORMAT } from '@constants/formatDataString';
import { ACCOUNTS_DATA } from 'data/accounts';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import type { AccountQueryParams } from '@type/common';
import { useRecoilValue } from 'recoil';
import { accountQueryParamsState } from 'store/accountQueryParamsAtoms';

import AccountListNav from './AccountListNav';

export default {
  title: 'Molecules/AccountListNav',
  component: AccountListNav,
} as ComponentMeta<typeof AccountListNav>;

const Template: ComponentStory<typeof AccountListNav> = args => {
  const accountQueryParams = useRecoilValue<AccountQueryParams>(
    accountQueryParamsState
  );
  return (
    <>
      <AccountListNav {...args} />
      <div>검색어: {accountQueryParams.q}</div>
      <div>
        브로커: {BROKERS_FORMAT[accountQueryParams.broker_id as string]}
      </div>
      <div>
        활성화 여부:{' '}
        {accountQueryParams.is_active === 'true' ? '활성화' : '비활성화'}
      </div>
      <div>페이지: {accountQueryParams.pageNum}</div>
      <div>상태: {STATUS_FORMAT[accountQueryParams.status as string]}</div>
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  dropDownData: [...ACCOUNTS_DATA.accountListBoard.dropDown],
};
