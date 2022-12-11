import { LoginDataType } from '@type/templates/login';

interface LoginInputFormType {
  onSubmit?: (e: React.SyntheticEvent) => void;
  isLogginIn: boolean;
  data?: LoginDataType;

  [key: string]: any;
}

export type { LoginInputFormType };
