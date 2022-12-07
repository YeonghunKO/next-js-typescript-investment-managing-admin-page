import {
  COLOR_VARIANTS,
  LOGIN_INPUT_CONTENT,
  LOGIN_INPUT_TYPE,
} from '@constants/arguments';

export const LOGIN_DATA = {
  input: [
    {
      content: LOGIN_INPUT_CONTENT.EMAIL,
      variant: COLOR_VARIANTS.PRIMARY100,
      type: LOGIN_INPUT_TYPE.TEXT,
      placeholder: '이메일 입력',
      onChangeType: LOGIN_INPUT_CONTENT.EMAIL,
    },
    {
      content: LOGIN_INPUT_CONTENT.PASSWORD,
      variant: COLOR_VARIANTS.PRIMARY100,
      type: LOGIN_INPUT_TYPE.PASSWORD,
      placeholder: '비밀번호 입력',
      onChangeType: LOGIN_INPUT_CONTENT.PASSWORD,
    },
  ],
};
