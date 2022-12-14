import Button from '@components/atoms/Button';
import DropDown from '@components/atoms/DropDown';
import SearchInput from '@components/atoms/SearchInput';
import { useGetAccountQuery } from '@hooks/accounts/useGetAccountQuery';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';
import * as S from './AccountListNav.styles';

const AccountListNav = () => {
  const { accountQueryParams, setAccountQueryParams } = useGetAccountQuery();

  const {
    accountListBoard: { dropDown: dropDownData },
  } = useRecoilValue(accountDataState);

  const updateQueryParamsOnInputChange = (searchInput: any) => {
    setAccountQueryParams({ ...accountQueryParams, q: searchInput });
  };

  const updateQueryParamsOnDropDownChange = (name: string, value: string) => {
    setAccountQueryParams({ ...accountQueryParams, [name]: value });
  };

  const initAccountQueryParams = () => {
    setAccountQueryParams({ pageNum: 1, q: '' });
  };

  return (
    <S.Container>
      <SearchInput
        queryParams={accountQueryParams}
        updateQueryParamsOnInputChange={updateQueryParamsOnInputChange}
      />
      {dropDownData.map(({ data, id, label }) => {
        return (
          <DropDown
            queryParams={accountQueryParams}
            updateQueryParamsOnDropDownChange={
              updateQueryParamsOnDropDownChange
            }
            key={id}
            data={data}
            label={label}
          />
        );
      })}
      <Button width="30%" onClick={initAccountQueryParams}>
        필터링 초기화
      </Button>
    </S.Container>
  );
};

export default AccountListNav;
