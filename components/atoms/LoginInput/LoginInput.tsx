import React, { ChangeEventHandler } from 'react';
import * as S from './LoginInput.styles';
import type { LoginInputType } from '@type/atoms/LoginInput';
import { LOGIN_INPUT_CONTENT } from '@constants/arguments';

const LoginInput = ({
  content,
  placeholder,
  type,
  ...props
}: LoginInputType) => {
  return <S.Input type={type} placeholder={placeholder} {...props} />;
};

export default LoginInput;
