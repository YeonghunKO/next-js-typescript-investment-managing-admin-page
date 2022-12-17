import Loader from '@components/atoms/Loader';
// import AccountList from '@components/molecules/AccountList';
import AccountListNav from '@components/molecules/AccountListNav';
import { useGetAccountQuery } from '@hooks/accounts/useGetAccountQuery';
import * as S from './AccountListBoard.styles';

import { Paper, Table, TableContainer } from '@mui/material';
import AccountTableBody from '@components/atoms/AccountTable/AccountTableBody';
import AccountTableHead from '@components/atoms/AccountTable/AccountTableHead';
import { useMemo, useState } from 'react';
import Pagination from '@components/atoms/Pagination';
import ErrorModal from '@components/molecules/ErrorModal';
import type { AccountListBoardType } from '@type/organisms/AccountListBoard';

const AccountListBoard = ({
  accountTableHeader,
  dropDown,
  accountTableBody,
}: AccountListBoardType) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    isLoading,
    isError,
    isFetching,
    accountQueryParams,
    setAccountQueryParams,
  } = useGetAccountQuery(setErrorMessage);

  const totalPagesNumber =
    accountTableBody?.headers &&
    new Object(accountTableBody.headers).hasOwnProperty('x-total-count') &&
    Math.ceil(
      parseInt(accountTableBody.headers['x-total-count'] as string) / 20
    );

  const accountTableBodyData = useMemo(() => {
    return accountTableBody?.data?.map(
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
  }, [accountTableBody]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        {errorMessage && (
          <ErrorModal
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
      </>
    );
  }

  const onPage = (pageNum: number) => {
    setAccountQueryParams({ ...accountQueryParams, pageNum });
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
              <Table aria-label="simple table" stickyHeader>
                <AccountTableHead accountTableHeaderData={accountTableHeader} />
                <AccountTableBody accountTableBodyData={accountTableBodyData} />
              </Table>
            </TableContainer>
          )}
        </S.TableContainer>
        {accountTableBodyData?.length ? (
          <Pagination
            onPage={onPage}
            currentPage={accountQueryParams.pageNum}
            totalPage={totalPagesNumber}
          />
        ) : null}
      </S.Content>
    </S.Container>
  );
};

export default AccountListBoard;
