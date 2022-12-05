import type { authInputProps } from '@type/templates/login';
import type { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface LoginInputFormType {
  onSubmit?: (e: React.SyntheticEvent) => void;
  [key: string]: any;
}

export type { LoginInputFormType };
