import type { DropDownDataType } from '@type/atoms/DropDown';
import type { AccountType } from '@type/common';
import type { AxiosResponse } from 'axios';

interface AccountListBoardType {
  accountTableHeader: string[];
  dropDown: DropDownDataType[];
  isLoading: boolean;
  isError: boolean;
  accountTableBody?: AxiosResponse<AccountType[]>;
}

export type { AccountListBoardType };
