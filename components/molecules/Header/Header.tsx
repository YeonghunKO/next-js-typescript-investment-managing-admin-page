import Icon from '@components/atoms/Icons/Icon';
import type { HeaderType } from '@type/molecules/Header';
import { useRecoilState } from 'recoil';
import { isSiderVisibleState } from 'store/isSiderVisibleAtoms';
import * as S from './Header.styles';

const Header = ({ header }: HeaderType) => {
  const [isSiderVisible, setIsSiderVisible] =
    useRecoilState(isSiderVisibleState);

  const toggleSider = () => {
    setIsSiderVisible(!isSiderVisible);
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
      <S.Container>
        {header.icons.map((icon, idx) => (
          <Icon
            key={idx}
            style={{ cursor: 'pointer', margin: '0 0.4rem 0 0.4rem' }}
            icon={icon}
          />
        ))}
      </S.Container>
    </S.Container>
  );
};

export default Header;
