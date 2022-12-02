import React from 'react';
import ComponenetWrapper from './LoginInput.styles';
import type { Input } from '@type/LoginIn/Input';

const LoginInput = ({ placeholder, ...props }: Input) => {
  return <ComponenetWrapper {...props} type="text" placeholder={placeholder} />;
};

export default LoginInput;
