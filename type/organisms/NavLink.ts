import { IconsKey } from '@components/atoms/Icons/Icon';
import { ReactNode } from 'react';

interface NavLinkType {
  children: ReactNode;
  icon?: { type: keyof IconsKey; size?: string };
  href: string;
  [key: string]: any;
}

export type { NavLinkType };
