import { handleHTTPResponseError } from '@constants/validator';
import { useMutation } from '@tanstack/react-query';
import type { authInputProps } from '@type/templates/login';
import axios, { AxiosError } from 'axios';
import LoginRepository from 'lib/api/login';
import Cookies from 'universal-cookie';

const useLoginQuery = (
  setServerAuthError: React.Dispatch<React.SetStateAction<string>>
) => {
  const cookies = new Cookies();
  const expiresTime = new Date();
  expiresTime.setHours(expiresTime.getHours() + 1);

  const { mutate } = useMutation(
    (authInputs: authInputProps) => LoginRepository.handleLogin(authInputs),
    {
      onSuccess: ({
        data: { accessToken },
      }: {
        data: { accessToken: string; user: any };
      }) => {
        cookies.set('access_token', accessToken, {
          path: '/',
          expires: expiresTime,
        });
      },
      onError: (res: AxiosError) => {
        setServerAuthError(handleHTTPResponseError(res));
      },
    }
  );

  return mutate;
};

export default useLoginQuery;
