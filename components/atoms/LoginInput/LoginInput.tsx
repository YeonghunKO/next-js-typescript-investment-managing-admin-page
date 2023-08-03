import React from "react";
import * as S from "./LoginInput.styles";
import type { LoginInputType } from "@type/atoms/LoginInput";

const LoginInput = ({ placeholder, type, ...props }: LoginInputType) => {
  return <S.Input type={type} placeholder={placeholder} {...props} />;
};

export default LoginInput;
