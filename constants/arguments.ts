import type { INPUT_VARIANT } from '@type/atoms/LoginInput';

const COLOR_VARIANTS: Record<Uppercase<INPUT_VARIANT>, INPUT_VARIANT> = {
  PRIMARY: 'primary',
  PRIMARY100: 'primary100',
  PRIMARY500: 'primary500',
  PRIMARY900: 'primary900',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const LOGIN_INPUT_TYPE: { TEXT: 'text'; PASSWORD: 'password' } = {
  TEXT: 'text',
  PASSWORD: 'password',
};

const LOGIN_INPUT_CONTENT: { EMAIL: 'email'; PASSWORD: 'password' } = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

export { COLOR_VARIANTS, LOGIN_INPUT_TYPE, LOGIN_INPUT_CONTENT };
