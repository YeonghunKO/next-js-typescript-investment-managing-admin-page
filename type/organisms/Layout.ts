import { HeaderDataType } from '@type/molecules/Header';
import { SiderDataType } from '@type/molecules/Sider';
import { ReactNode } from 'react';

interface LayoutType {
  children: ReactNode;
  header: HeaderDataType;
  sider: SiderDataType;
}

export type { LayoutType };
