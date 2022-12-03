import type { INPUT_VARIANT } from '@type/atoms/Input';

const COLOR_VARIANTS: Record<Uppercase<INPUT_VARIANT>, INPUT_VARIANT> = {
  PRIMARY: 'primary',
  PRIMARY100: 'primary100',
  PRIMARY500: 'primary500',
  PRIMARY900: 'primary900',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

export { COLOR_VARIANTS };
