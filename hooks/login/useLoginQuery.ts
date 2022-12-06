import { handleHTTPResponseError } from '@constants/validator';
import { useMutation } from '@tanstack/react-query';
import { authInputProps } from '@type/templates/login';
import axios, { AxiosError } from 'axios';
import LoginRepository from 'lib/api/login';

const useLoginQuery = (
  setServerAuthError: React.Dispatch<React.SetStateAction<string>>
) => {
  const { mutate } = useMutation(
    (authInputs: authInputProps) => LoginRepository.handleLogin(authInputs),
    {
      onSuccess: ({
        data: { accessToken },
      }: {
        data: { accessToken: string; user: any };
      }) => {
        console.log(accessToken);

        axios.post('/api/login', accessToken);
      },
      onError: (res: AxiosError) => {
        setServerAuthError(handleHTTPResponseError(res));
      },
    }
  );

  return mutate;
};

export default useLoginQuery;
