import { handleHTTPResponseError } from '@constants/validator';
import { useMutation } from '@tanstack/react-query';
import type { authInputProps } from '@type/molecules/LoginInputForm';
import { AxiosError } from 'axios';
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
      onError: (err: AxiosError) => {
        console.log(err);

        setServerAuthError(handleHTTPResponseError(err));
      },
    }
  );

  return mutate;
};

export default useLoginQuery;
