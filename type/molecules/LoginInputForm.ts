interface authInputProps {
  email: string;
  password: string;
}

type InputKey = 'content' | 'variant' | 'type' | 'placeholder' | 'onChangeType';
type Input = Record<InputKey, string> & { onChangeType: 'email' | 'password' };

type inputDataType = Input[];

interface LoginInputFormType {
  onSubmit?: (e: React.SyntheticEvent) => void;
  isLogginIn: boolean;
  input?: inputDataType;

  [key: string]: any;
}

export type { LoginInputFormType, authInputProps, inputDataType };
