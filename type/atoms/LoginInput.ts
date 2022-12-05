import type { authInputProps } from '@type/templates/login';
import type { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

type INPUT_VARIANT =
  | 'primary'
  | 'primary100'
  | 'primary500'
  | 'primary900'
  | 'secondary'
  | 'tertiary';

type InputType = 'text' | 'password';

interface LoginInputType {
  placeholder: string;
  variant: INPUT_VARIANT;
  type: InputType;
  [key: string]: any;
}

export type { LoginInputType, INPUT_VARIANT };
