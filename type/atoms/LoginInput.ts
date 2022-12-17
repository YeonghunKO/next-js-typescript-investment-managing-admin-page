type INPUT_VARIANT =
  | 'primary'
  | 'primary100'
  | 'primary500'
  | 'primary900'
  | 'secondary'
  | 'tertiary'
  | string;

type InputType = 'text' | 'password' | string;

interface LoginInputType extends React.HTMLAttributes<HTMLInputElement> {
  variant: INPUT_VARIANT;
  type: InputType;
  [key: string]: any;
}

export type { LoginInputType, INPUT_VARIANT };
