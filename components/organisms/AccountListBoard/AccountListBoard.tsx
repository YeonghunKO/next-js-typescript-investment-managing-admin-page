import Loader from '@components/atoms/Loader';
// import AccountList from '@components/molecules/AccountList';
import AccountListNav from '@components/molecules/AccountListNav';
import { useGetAccountQuery } from '@hooks/accounts/useGetAccountQuery';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';
import * as S from './AccountListBoard.styles';

import { Paper, Table, TableContainer } from '@mui/material';
import AccountTableBody from '@components/atoms/AccountTable/AccountTableBody';
import AccountTableHead from '@components/atoms/AccountTable/AccountTableHead';
import { useMemo } from 'react';
import Pagination from '@components/atoms/Pagination';

const AccountListBoard = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    accountQueryParams: { pageNum },
  } = useGetAccountQuery();

  const {
    accountListBoard: { accountTableHeader, dropDown },
  } = useRecoilValue(accountDataState);

  const totalPagesNumber =
    data?.headers &&
    new Object(data.headers).hasOwnProperty('x-total-count') &&
    Math.ceil(parseInt(data.headers['x-total-count'] as string) / 20);

  const accountTableBodyData = useMemo(() => {
    return data?.data?.map(
      ({
        broker_id,
        status,
        number,
        name: accountName,
        assets,
        payments,
        is_active,
        created_at,
        user,
      }) => ({
        userName: user?.name,
        number,
        broker_id,
        status,
        accountName,
        assets,
        payments,
        is_active,
        created_at,
      })
    );
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error.response?.data}</div>;
  }

  const onPage = (pageContent: number) => {
    console.log(pageContent);
  };

  return (
    <S.Container>
      <S.Content>
        <AccountListNav dropDownData={dropDown} />
        <S.TableContainer>
          {accountTableBodyData?.length === 0 ? (
            <S.EmptyTable>필터링된 계좌가 없습니다</S.EmptyTable>
          ) : (
            <TableContainer sx={{ height: '100%' }} component={Paper}>
              <Table aria-label="simple table">
                <AccountTableHead accountTableHeaderData={accountTableHeader} />
                <AccountTableBody accountTableBodyData={accountTableBodyData} />
              </Table>
            </TableContainer>
          )}
        </S.TableContainer>
        <Pagination
          onPage={onPage}
          currentPage={pageNum}
          totalPage={totalPagesNumber}
        />
      </S.Content>
    </S.Container>
  );
};

export default AccountListBoard;
