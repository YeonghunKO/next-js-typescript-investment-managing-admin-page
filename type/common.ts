type valueOf<T> = T[keyof T];
interface AccountQueryParams {
  broker_id?: string;
  is_active?: string;
  status?: string;
  q?: string;
  pageNum: number;
  [key: string]: any;
}

export type { valueOf, AccountQueryParams };
