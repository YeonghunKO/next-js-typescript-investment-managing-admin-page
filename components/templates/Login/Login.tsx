import React, { useState } from 'react';
import * as S from './Login.styles';
import logo from 'public/assets/img/December&Company.png';
import Image from 'next/image';
import LoginInputForm from '@components/organisms/LoginInputForm';
import ErrorModal from '@components/organisms/ErrorModal';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { loginUserInfo } from 'store/loginAtoms';
import { useRouter } from 'next/router';

const Login = () => {
  const [serverAuthError, setServerAuthError] = useState('');
  const userInfo = useRecoilValue(loginUserInfo);
  const router = useRouter();

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.post('/api/login', userInfo);

    // router.push('/accounts');

    // console.log('cookie from login', cookie);
  };
  return (
    <S.ComponentWrapper>
      <S.Container>
        <Image src={logo} alt="company-logo" />
        <LoginInputForm onSubmit={onSubmitHandler} />
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
