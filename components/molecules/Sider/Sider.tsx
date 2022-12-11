import type { SiderType } from '@type/molecules/Sider';
import NavLink from '../NavLink';

import * as S from './Sider.styles';

const Sider = ({ sider }: SiderType) => {
  return (
    <S.Container isVisible={true}>
      <S.Header>DnC</S.Header>
      {sider.map(({ text, icon, ...props }, idx) => (
        <NavLink key={idx} icon={{ type: icon }} {...props}>
          {text}
        </NavLink>
      ))}
    </S.Container>
  );
};

export default Sider;
