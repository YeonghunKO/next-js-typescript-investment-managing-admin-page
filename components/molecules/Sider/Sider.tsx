import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icons/Icon';
import { ACCOUNTS_DATA } from 'data/accounts';
import NavLink from '../NavLink';

import * as S from './Sider.styles';

const Sider = ({ ...props }) => {
  return (
    <S.Container isVisible={true}>
      <S.Header>DnC</S.Header>
      {ACCOUNTS_DATA.sider.map(({ text, icon, ...props }, idx) => (
        <NavLink key={idx} icon={{ type: icon }} {...props}>
          {text}
        </NavLink>
      ))}
    </S.Container>
  );
};

export default Sider;
