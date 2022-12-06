import { LOGIN_INPUT_CONTENT } from '@constants/arguments';
import { LOGIN_VALIDATION_ERRORS, regex } from '@constants/validator';
import { valueOf } from '@type/common';
import { useState } from 'react';

const useValidate = (type: valueOf<typeof LOGIN_INPUT_CONTENT>) => {
  const [validity, setValidity] = useState(false);
  const [warnMesage, setWarnMessage] = useState('');

  const onCheckValidity = (text: string) => {
    if (!text.length) {
      let message: string;
      type === LOGIN_INPUT_CONTENT.EMAIL
        ? (message = LOGIN_VALIDATION_ERRORS.REQUIRED_EMAIL)
        : (message = LOGIN_VALIDATION_ERRORS.REQUIRED_PASSWORD);
      setWarnMessage(message);
      return setValidity(false);
    }

    const regexForValAuth = {
      password: {
        warnText: LOGIN_VALIDATION_ERRORS.INVALID_PASSWORD,
        fn: new RegExp(regex.isPasswordValidate),
      },
      email: {
        warnText: LOGIN_VALIDATION_ERRORS.INVALID_EMAIL,
        fn: new RegExp(regex.isEmailValidate),
      },
    };

    const { warnText, fn } = regexForValAuth[type];
    if (!fn.test(text)) {
      setWarnMessage(warnText);
      setValidity(false);
    } else {
      setValidity(true);
    }
  };
  return [validity, warnMesage, onCheckValidity] as const;
};

export { useValidate };
