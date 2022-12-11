import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icons/Icon';
import LoginInput from '@components/atoms/LoginInput';

import { useLoginForm } from '@hooks/login/useLoginForm';
import { LoginInputFormType } from '@type/molecules/LoginInputForm';
import React from 'react';
import * as S from './LoginInputForm.styles';

const LoginInputForm = ({
  onSubmit,
  isLogginIn,
  data,
  ...props
}: LoginInputFormType) => {
  const {
    userInfo,
    handleInputValue,
    isEmailValid,
    emailWarnMessage,
    isPasswordValid,
    passwordWarnMessage,
  } = useLoginForm();

  return (
    <>
      <S.Form onSubmit={onSubmit} {...props}>
        {data?.input?.map((item, idx) => (
          <LoginInput
            key={idx}
            {...item}
            onChange={handleInputValue(item.onChangeType)}
            value={userInfo[item.onChangeType]}
          />
        ))}

        <Button
          icon={isLogginIn ? 'Spinner' : undefined}
          disabled={!isEmailValid || !isPasswordValid}
          width="100%"
        >
          로그인하기
        </Button>
      </S.Form>
      {!isEmailValid && <S.ErrorMessage>{emailWarnMessage}</S.ErrorMessage>}
      {!isPasswordValid && (
        <S.ErrorMessage>{passwordWarnMessage}</S.ErrorMessage>
      )}
    </>
  );
};

export default LoginInputForm;
