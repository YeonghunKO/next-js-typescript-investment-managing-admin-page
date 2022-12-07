type valueOf<T> = T[keyof T];
interface InvestmentAccountProps {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  q?: string;
  pageNum: number;
}

export type { valueOf, InvestmentAccountProps };
