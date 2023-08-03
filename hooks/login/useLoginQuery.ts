import { ACCESS_TOKEN } from "@constants/cookie";
import { handleHTTPResponseError } from "@constants/validator";
import { useMutation } from "@tanstack/react-query";
import type { authInputProps } from "@type/molecules/LoginInputForm";
import { AxiosError } from "axios";
import LoginRepository from "@lib/api/login";
import Cookies from "universal-cookie";
const useLoginQuery = (
  setServerAuthError: React.Dispatch<React.SetStateAction<string>>,
  setIsLoggingIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const cookies = new Cookies();
  const expiresTime = new Date();
  expiresTime.setHours(expiresTime.getHours() + 1);

  return useMutation(
    (authInputs: authInputProps) => LoginRepository.handleLogin(authInputs),
    {
      onSuccess: ({
        data: { accessToken },
      }: {
        data: { accessToken: string; user: any };
      }) => {
        cookies.set(ACCESS_TOKEN, accessToken, {
          path: "/",
          expires: expiresTime,
        });
      },
      onError: (err: AxiosError) => {
        console.log(err);

        setServerAuthError(handleHTTPResponseError(err));
        setIsLoggingIn(false);
      },
    }
  );
};

export default useLoginQuery;
