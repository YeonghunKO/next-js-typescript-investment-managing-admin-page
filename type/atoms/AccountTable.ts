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
  isCheckbox?:boolean
};

type AccountTableBodyType = {
  accountTableBodyData?: AccountTableBodyDataType[];
  isCheckbox?: boolean;
};

export type {
  AccountTableHeaderType,
  AccountTableBodyType,
  AccountTableBodyDataType,
};
