import type { SiderDataType } from '@type/molecules/Sider';
import { useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';
import { isSiderVisibleState } from 'store/isSiderVisibleAtoms';
import NavLink from '../NavLink';

import * as S from './Sider.styles';

const Sider = () => {
  const isSiderVisible = useRecoilValue(isSiderVisibleState);
  const { sider: data }: { sider: SiderDataType } =
    useRecoilValue(accountDataState);
  return (
    <S.Container isVisible={isSiderVisible}>
      <S.Header>DnC</S.Header>
      {data.map(({ text, icon, ...props }, idx) => (
        <NavLink key={idx} icon={{ type: icon }} {...props}>
          {text}
        </NavLink>
      ))}
    </S.Container>
  );
};

export default Sider;
