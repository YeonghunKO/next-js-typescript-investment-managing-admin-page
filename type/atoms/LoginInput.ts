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
  [key: string]: string;
}

export type { LoginInputType, INPUT_VARIANT };
