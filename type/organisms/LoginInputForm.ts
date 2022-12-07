import { LoginDataType } from '@type/templates/login';

interface LoginInputFormType {
  onSubmit?: (e: React.SyntheticEvent) => void;
  data?: LoginDataType;

  [key: string]: any;
}

export type { LoginInputFormType };
