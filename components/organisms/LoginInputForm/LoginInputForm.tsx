import Button from '@components/atoms/Button';
import LoginInput from '@components/atoms/LoginInput';
import { COLOR_VARIANTS, LOGIN_INPUT_TYPE } from '@constants/arguments';
import React from 'react';
import ComponentWrapper from './LoginInputForm.styles';

const LoginInputForm = ({ ...props }: any) => {
  return (
    <ComponentWrapper>
      <LoginInput
        variant={COLOR_VARIANTS.PRIMARY100}
        type={LOGIN_INPUT_TYPE.TEXT}
        placeholder="이메일 입력"
      />
      <LoginInput
        variant={COLOR_VARIANTS.PRIMARY100}
        type={LOGIN_INPUT_TYPE.PASSWORD}
        placeholder="비밀번호 입력"
      />
      <Button width="100%">로그인하기</Button>
    </ComponentWrapper>
  );
};

export default LoginInputForm;
