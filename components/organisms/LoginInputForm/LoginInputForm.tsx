import Button from '@components/atoms/Button';
import LoginInput from '@components/atoms/LoginInput';
import {
  COLOR_VARIANTS,
  LOGIN_INPUT_CONTENT,
  LOGIN_INPUT_TYPE,
} from '@constants/arguments';
import { LoginInputFormType } from '@type/organisms/LoginInputForm';
import React from 'react';
import * as S from './LoginInputForm.styles';

const LoginInputForm = ({ onSubmit, ...props }: LoginInputFormType) => {
  return (
    <>
      <S.Form onSubmit={onSubmit} {...props}>
        <LoginInput
          content={LOGIN_INPUT_CONTENT.EMAIL}
          variant={COLOR_VARIANTS.PRIMARY100}
          type={LOGIN_INPUT_TYPE.TEXT}
          placeholder="이메일 입력"
        />
        {/* <LoginInput
          content={LOGIN_INPUT_CONTENT.PASSWORD}
          register={register}
          variant={COLOR_VARIANTS.PRIMARY100}
          type={LOGIN_INPUT_TYPE.PASSWORD}
          placeholder="비밀번호 입력"
        /> */}
        <Button width="100%">로그인하기</Button>
      </S.Form>
      <S.ErrorMessage></S.ErrorMessage>
    </>
  );
};

export default LoginInputForm;
