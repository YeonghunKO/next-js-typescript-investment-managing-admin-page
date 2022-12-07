interface authInputProps {
  email: string;
  password: string;
}

type InputKey = 'content' | 'variant' | 'type' | 'placeholder' | 'onChangeType';
type Input = Record<InputKey, string> & { onChangeType: 'email' | 'password' };

interface LoginDataType {
  input: Input[];
}

export type { authInputProps, LoginDataType };
