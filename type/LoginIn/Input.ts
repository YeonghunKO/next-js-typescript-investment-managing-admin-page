type INPUT_VARIANT =
  | 'primary'
  | 'primary100'
  | 'primary500'
  | 'primary900'
  | 'secondary'
  | 'tertiary';

interface Input {
  placeholder: string;
  variant: INPUT_VARIANT;
  [key: string]: string;
}

export type { Input, INPUT_VARIANT };
