import { IconsKey } from '@components/atoms/Icons/Icon';
import { ReactNode } from 'react';

interface ButtonType {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: { type: keyof IconsKey | typeof undefined; size?: string };
  width?: string;
  padding?: string;
  backgroundColor?: string;
  [key: string]: any;
}

export type { ButtonType };
