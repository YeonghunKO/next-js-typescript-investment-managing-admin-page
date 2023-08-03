import { LOGIN_INPUT_CONTENT } from "@constants/arguments";
import { valueOf } from "@type/common";
import { ChangeEvent, useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { loginUserInfo } from "@store/loginAtoms";
import { useValidate } from "../common/useValidate";

const useLoginForm = () => {
  const setRecoilUserInfo = useSetRecoilState(loginUserInfo);
  const [isEmailValid, emailWarnMessage, onCheckEmail] = useValidate(
    LOGIN_INPUT_CONTENT.EMAIL
  );
  const [isPasswordValid, passwordWarnMessage, onCheckPassword] = useValidate(
    LOGIN_INPUT_CONTENT.PASSWORD
  );

  const [userInfo, setUserInfo] = useState({
    [LOGIN_INPUT_CONTENT.EMAIL]: "",
    [LOGIN_INPUT_CONTENT.PASSWORD]: "",
  });

  const handleInputValue = useCallback(
    (key: valueOf<typeof LOGIN_INPUT_CONTENT>) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [key]: e.target.value });
        setRecoilUserInfo({ ...userInfo, [key]: e.target.value });

        if (key === LOGIN_INPUT_CONTENT.EMAIL) {
          onCheckEmail(e.target.value);
        }

        if (key === LOGIN_INPUT_CONTENT.PASSWORD) {
          onCheckPassword(e.target.value);
        }
      },
    [userInfo, onCheckEmail, onCheckPassword, setRecoilUserInfo]
  );

  return {
    userInfo,
    setUserInfo,
    handleInputValue,
    isEmailValid,
    emailWarnMessage,
    isPasswordValid,
    passwordWarnMessage,
  };
};

export { useLoginForm };
