import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icons/Icon';
import { ROUTER } from '@constants/router';
import type { HeaderDataType, HeaderType } from '@type/molecules/Header';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accountDataState } from 'store/accountDataAtoms';
import { isSiderVisibleState } from 'store/isSiderVisibleAtoms';
import Cookies from 'universal-cookie';
import * as S from './Header.styles';

const Header = () => {
  const [isSiderVisible, setIsSiderVisible] =
    useRecoilState(isSiderVisibleState);
  const { header: data }: { header: HeaderDataType } =
    useRecoilValue(accountDataState);
  const cookie = new Cookies();
  const router = useRouter();

  const toggleSider = () => {
    setIsSiderVisible(!isSiderVisible);
  };

  const handleLogOut = () => {
    router.push(ROUTER.LOGIN);
    cookie.remove('access_token');
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
        <span>{data.title}</span>
      </S.Title>
      <S.IconsNav>
        {data.icons.map((icon, idx) => (
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
