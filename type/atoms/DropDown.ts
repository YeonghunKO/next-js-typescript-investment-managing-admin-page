import type { AccountQueryParams } from '@type/common';

type DropDownMenuDataType = { label: string; value: string };

type DropDownDataType = {
  id: number;
  label: 'broker_id' | 'is_active' | 'status';
  data: DropDownMenuDataType[];
};
interface DropDownType {
  data: DropDownMenuDataType[];
  label: 'broker_id' | 'is_active' | 'status';
  updateQueryParamsOnDropDownChange: (name: string, value: string) => void;

  queryParams: AccountQueryParams;
}

export type { DropDownType, DropDownDataType };
