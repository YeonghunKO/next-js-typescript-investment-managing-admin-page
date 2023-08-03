import React, { useState } from "react";
import * as S from "./Login.styles";
import Image from "next/image";
import LoginInputForm from "@components/molecules/LoginInputForm";
import ErrorModal from "@components/molecules/ErrorModal";
import { useRecoilValue } from "recoil";
import { loginUserInfo } from "@store/loginAtoms";
import { useRouter } from "next/router";

import useLoginQuery from "@hooks/login/useLoginQuery";
import Head from "next/head";
import { ROUTER } from "@constants/router";
import { LoginDataType } from "@type/templates/Login";

const Login = ({ input }: LoginDataType) => {
  const router = useRouter();
  const [serverAuthError, setServerAuthError] = useState("");
  const userInfo = useRecoilValue(loginUserInfo);
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const { mutate } = useLoginQuery(setServerAuthError, setIsLoggingIn);
  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(ROUTER.ACCOUNTS);
    mutate(userInfo);
    setIsLoggingIn(true);
  };
  return (
    <S.ComponentWrapper>
      <Head>
        <title>login</title>
      </Head>
      <S.Container>
        <Image
          src="/assets/img/December&Company.png"
          alt="company-logo"
          width={100}
          height={100}
          placeholder="blur"
          onError={() => alert("image error")}
          blurDataURL="data:image/png;base64,imagedata"
        />

        <LoginInputForm
          input={input}
          onSubmit={onSubmitHandler}
          isLogginIn={isLogginIn}
        />
        <S.Copyright>ⓒ December and Company</S.Copyright>
      </S.Container>
      {serverAuthError && (
        <ErrorModal
          errorMessage={serverAuthError}
          setErrorMessage={setServerAuthError}
        />
      )}
    </S.ComponentWrapper>
  );
};

export default Login;
