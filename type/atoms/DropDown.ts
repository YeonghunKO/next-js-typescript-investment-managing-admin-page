import type { AccountQueryParams } from '@type/common';

interface DropDownType {
  data: { label: string; value: string }[];
  label: 'broker_id' | 'is_active' | 'status';
  updateQueryParamsOnDropDownChange: (name: string, value: string) => void;

  queryParams: AccountQueryParams;
}

export type { DropDownType };
