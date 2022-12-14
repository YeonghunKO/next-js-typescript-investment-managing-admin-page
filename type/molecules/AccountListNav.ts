type DropDownData = {
  id: number;
  label: 'broker_id' | 'is_active' | 'status';
  data: any[];
};

interface AccountListNavType {
  dropDownData: DropDownData[];
}

export type { AccountListNavType };
