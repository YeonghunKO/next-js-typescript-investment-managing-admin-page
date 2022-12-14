type valueOf<T> = T[keyof T];
interface AccountQueryParams {
  broker_id?: string;
  is_active?: string;
  status?: string;
  q?: string;
  pageNum: number;
  [key: string]: any;
}

interface AccountType {
  id: number;
  userId: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    uuid: string;
    photo: string;
    name?: string;
    email: string;
    age: number;
    gender_origin: number;
    birth_date: string;
    phone_number: string;
    address: string;
    detail_address: string;
    last_login: string;
    created_at: string;
    updated_at: string;
  };
}

export type { valueOf, AccountQueryParams, AccountType };
