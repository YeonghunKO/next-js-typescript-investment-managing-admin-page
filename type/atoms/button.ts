import { ReactNode } from 'react';

interface ButtonType {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

export type { ButtonType };
