import React, { useState } from 'react';
import * as S from './Login.styles';
import logo from 'public/assets/img/December&Company.png';
import Image from 'next/image';
import LoginInputForm from '@components/organisms/LoginInputForm';
import ErrorModal from '@components/organisms/ErrorModal';
import { useRecoilValue } from 'recoil';
import { loginUserInfo } from 'store/loginAtoms';
import { useRouter } from 'next/router';

import useLoginQuery from '@hooks/login/useLoginQuery';
import Head from 'next/head';
import { ROUTER } from '@constants/router';

const Login = ({ ...props }) => {
  const router = useRouter();
  const [serverAuthError, setServerAuthError] = useState('');
  const userInfo = useRecoilValue(loginUserInfo);

  const mutate = useLoginQuery(setServerAuthError);
  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      mutate(userInfo);
      router.push(ROUTER.ACCOUNTS);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.ComponentWrapper>
      <Head>
        <title>login</title>
      </Head>
      <S.Container>
        <Image
          src={logo}
          alt="company-logo"
          width={100}
          height={100}
          placeholder="blur"
        />
        <LoginInputForm {...props} onSubmit={onSubmitHandler} />
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
