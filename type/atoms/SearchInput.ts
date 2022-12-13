import type { AccountQueryParams } from '@type/common';

interface SearchInputType {
  updateQueryParamsOnInputChange: (value: any) => void;

  queryParams: AccountQueryParams;
}

export type { SearchInputType };
