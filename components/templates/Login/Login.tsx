import React, { useState } from 'react';
import * as S from './Login.styles';
import logo from 'public/assets/img/December&Company.png';
import Image from 'next/image';
import LoginInputForm from '@components/organisms/LoginInputForm';
import ErrorModal from '@components/organisms/ErrorModal';
import { useForm } from 'react-hook-form';
import { authInputProps } from '@type/templates/login';
import axios from 'axios';

const Login = () => {
  const [serverAuthError, setServerAuthError] = useState('');

  const onSubmitHandler = async (e: React.SyntheticEvent) => {};
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
