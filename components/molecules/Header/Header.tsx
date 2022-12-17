import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icons/Icon';
import { ACCESS_TOKEN } from '@constants/cookie';
import { ROUTER } from '@constants/router';
import type { HeaderType } from '@type/molecules/Header';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isSiderVisibleState } from 'store/isSiderVisibleAtoms';
import Cookies from 'universal-cookie';
import * as S from './Header.styles';

const Header = ({ header }: HeaderType) => {
  const [isSiderVisible, setIsSiderVisible] =
    useRecoilState(isSiderVisibleState);

  const cookie = new Cookies();
  const router = useRouter();

  const toggleSider = () => {
    setIsSiderVisible(!isSiderVisible);
  };

  const handleLogOut = () => {
    router.push(ROUTER.LOGIN);
    cookie.remove(ACCESS_TOKEN);
  };
  return (
    <S.Container>
      <S.Title>
        {isSiderVisible ? (
          <Icon
            icon="MenuClose"
            style={{ cursor: 'pointer' }}
            onClick={toggleSider}
          />
        ) : (
          <Icon
            icon="MenuOpen"
            style={{ cursor: 'pointer' }}
            onClick={toggleSider}
          />
        )}
        <span>{header.title}</span>
      </S.Title>
      <S.IconsNav>
        {header.icons.map((icon, idx) => (
          <Icon
            key={idx}
            style={{ cursor: 'pointer', margin: '0 0.4rem 0 0.4rem' }}
            icon={icon}
          />
        ))}
        <Button
          icon={{ type: 'LogOut' }}
          style={{ padding: '0.5rem', width: 'auto', marginLeft: '0.5rem' }}
          onClick={handleLogOut}
        >
          로그아웃
        </Button>
      </S.IconsNav>
    </S.Container>
  );
};

export default Header;
