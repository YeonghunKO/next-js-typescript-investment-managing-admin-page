import Button from "@components/atoms/Button";
import LoginInput from "@components/atoms/LoginInput";

import { useLoginForm } from "@hooks/login/useLoginForm";
import { LoginInputFormType } from "@type/molecules/LoginInputForm";
import React from "react";
import * as S from "./LoginInputForm.styles";

const LoginInputForm = ({
  onSubmit,
  isLogginIn,
  input,
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
        {input?.map(({ onChangeType, ...item }, idx) => (
          <LoginInput
            key={idx}
            {...item}
            onChange={handleInputValue(onChangeType)}
            value={userInfo[onChangeType]}
          />
        ))}

        <Button
          role="login-button"
          icon={{ type: isLogginIn ? "Spinner" : undefined, size: "18" }}
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
