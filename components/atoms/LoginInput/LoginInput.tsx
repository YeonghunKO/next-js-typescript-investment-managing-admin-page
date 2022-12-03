import React from 'react';
import ComponenetWrapper from './LoginInput.styles';
import type { Input } from '@type/atoms/Input';

const LoginInput = ({ placeholder, type, ...props }: Input) => {
  return <ComponenetWrapper {...props} type={type} placeholder={placeholder} />;
};

export default LoginInput;
