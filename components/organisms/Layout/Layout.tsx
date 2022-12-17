import Header from '@components/molecules/Header';
import Sider from '@components/molecules/Sider';
import type { LayoutType } from '@type/organisms/Layout';
import * as S from './Layout.styles';

const Layout = ({ children, header, sider }: LayoutType) => {
  return (
    <S.Container>
      <Sider sider={sider} />
      <S.Content>
        <Header header={header} />
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;
