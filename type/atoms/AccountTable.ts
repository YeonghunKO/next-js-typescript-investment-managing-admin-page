type AccountTableBodyDataType = {
  userName?: string;
  number: string;
  broker_id: string;
  status: number;
  accountName: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
};

type AccountTableHeaderType = {
  accountTableHeaderData: string[];
  checkbox?: boolean;
};

type AccountTableBodyType = {
  accountTableBodyData?: AccountTableBodyDataType[];
};

export type {
  AccountTableHeaderType,
  AccountTableBodyType,
  AccountTableBodyDataType,
};
