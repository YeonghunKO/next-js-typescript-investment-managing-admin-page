import Icon from '@components/atoms/Icons/Icon';
import type { NavLinkType } from '@type/molecules/NavLink';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { isSiderVisibleState } from 'store/isSiderVisibleAtoms';

import * as S from './NavLink.styles';

const NavLink = ({
  icon,
  children,
  href,
  isActive,
  backgroundColor,
  ...props
}: NavLinkType) => {
  const { pathname } = useRouter();
  const isSiderVisible = useRecoilValue(isSiderVisibleState);
  return (
    <Link href={href} passHref legacyBehavior>
      <S.Anchor
        {...props}
        isSiderVisible={isSiderVisible}
        backgroundColor={backgroundColor}
        className={pathname === href || isActive ? 'is-active' : ''}
      >
        <div className="anchor__wrapper">
          {icon && <Icon icon={icon.type} size={icon.size} />}
          <span>{children}</span>
        </div>
      </S.Anchor>
    </Link>
  );
};

export default NavLink;
