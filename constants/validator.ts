import { AxiosError } from 'axios';

export const regex = {
  isEmailValidate:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  isNumber: /^\d+$/,
  isPasswordValidate: /(?=.{3,})/,
  isValidDate: /(\d{4})-(\d{2})-(\d{2})/,
  isValidPhoneNumber: /(\d{3})-(\d{4})-(\d{4})/,
};

export const LOGIN_VALIDATION_ERRORS = {
  USER_NOT_FOUND: '등록되지 않은 사용자입니다.',
  INVALID_PASSWORD: '* 비밀번호는 3글자 이하이거나 잘못된 비밀번호 입니다',
  REQUIRED_PASSWORD: '* 비밀번호를 입력해주세요',
  INVALID_EMAIL: '* 이메일 형식을 다시 확인해 주세요.',
  REQUIRED_EMAIL: '* 이메일을 입력해 주세요.',
  UNEXPECTED_ERROR: '잠시 후 다시 시도해 주세요.',
};

export const handleHTTPResponseError = (res: AxiosError) => {
  console.log(res);
  if (res.response?.data === 'Cannot find user')
    return LOGIN_VALIDATION_ERRORS.USER_NOT_FOUND;
  if (res.response?.data === 'Incorrect password')
    return LOGIN_VALIDATION_ERRORS.INVALID_PASSWORD;
  if (res.response?.data === 'Password is too short')
    return LOGIN_VALIDATION_ERRORS.INVALID_PASSWORD;
  else return LOGIN_VALIDATION_ERRORS.UNEXPECTED_ERROR;
};
