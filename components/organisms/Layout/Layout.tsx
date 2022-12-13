import Header from '@components/molecules/Header';
import Sider from '@components/molecules/Sider';
import type { ReactNode } from 'react';
import * as S from './Layout.styles';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      <Sider />
      <S.Content>
        <Header />
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;
