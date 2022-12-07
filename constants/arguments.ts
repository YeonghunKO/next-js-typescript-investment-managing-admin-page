import type { INPUT_VARIANT } from '@type/atoms/LoginInput';

export const COLOR_VARIANTS: Record<string, string> = {
  PRIMARY: 'primary',
  PRIMARY100: 'primary100',
  PRIMARY500: 'primary500',
  PRIMARY900: 'primary900',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

export const LOGIN_INPUT_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
} as const;

export const LOGIN_INPUT_CONTENT = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;
