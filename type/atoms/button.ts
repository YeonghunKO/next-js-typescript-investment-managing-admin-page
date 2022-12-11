import { IconsKey } from '@components/atoms/Icons/Icon';
import { ReactNode } from 'react';

interface ButtonType {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: keyof IconsKey | typeof undefined;
  [key: string]: any;
}

export type { ButtonType };
