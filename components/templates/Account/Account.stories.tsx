import { ComponentStory, ComponentMeta } from '@storybook/react';
import Account from './Account';
import * as S from '@components/organisms/AccountListBoard/AccountListBoard.styles';
import AccountListNav from '@components/molecules/AccountListNav';
import { Paper, Table, TableContainer } from '@mui/material';
import AccountTableHead from '@components/atoms/AccountTable/AccountTableHead';
import AccountTableBody from '@components/atoms/AccountTable/AccountTableBody';
import Pagination from '@components/atoms/Pagination';
import { ACCOUNTS_DATA } from 'data/accounts';
import { useState } from 'react';
import Layout from '@components/organisms/Layout';

// 30개의 랜덤한 accounts
const accountTableBodyData = [
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 1,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 1,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 1,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '270',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '230',
    status: 3,
    accountName: 'Home Loan Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '238',
    status: 3,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
  {
    userName: 'Willard 당',
    number: '189082459486',
    broker_id: '240',
    status: 2,
    accountName: 'Investment Account',
    assets: '967033906.22',
    payments: '328115751.41',
    is_active: false,
    created_at: '2021-09-23T05:18:10.251Z',
  },
];

const MockAccount = () => {
  const [page, setPage] = useState(1);

  const [
    accountTableBodyDataByPageNumber,
    setAccountTableBodyDataByPageNumber,
  ] = useState([...accountTableBodyData]);

  const pageLimit = 20;

  const onPage = (pageNumber: number) => {
    setPage(pageNumber - 1);

    setAccountTableBodyDataByPageNumber(
      accountTableBodyData.slice(
        pageLimit * page - 1,
        pageLimit * page - 1 + pageLimit
      )
    );
  };

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <AccountListNav
            dropDownData={ACCOUNTS_DATA.accountListBoard.dropDown}
          />
          <S.TableContainer>
            {accountTableBodyData?.length === 0 ? (
              <S.EmptyTable>필터링된 계좌가 없습니다</S.EmptyTable>
            ) : (
              <TableContainer sx={{ height: '100%' }} component={Paper}>
                <Table aria-label="simple table" stickyHeader>
                  <AccountTableHead
                    accountTableHeaderData={
                      ACCOUNTS_DATA.accountListBoard.accountTableHeader
                    }
                  />
                  <AccountTableBody
                    accountTableBodyData={accountTableBodyDataByPageNumber}
                  />
                </Table>
              </TableContainer>
            )}
          </S.TableContainer>
          {accountTableBodyData?.length ? (
            <Pagination
              onPage={onPage}
              currentPage={page}
              totalPage={Math.ceil(accountTableBodyData.length / pageLimit)}
            />
          ) : null}
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default {
  title: 'Templates/Account',
  component: MockAccount,
} as ComponentMeta<typeof MockAccount>;

const Template: ComponentStory<typeof MockAccount> = args => <MockAccount />;

export const Basic = Template.bind({});

Basic.args = {};
