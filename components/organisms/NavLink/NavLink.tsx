import Icon from '@components/atoms/Icons/Icon';
import type { NavLinkType } from '@type/organisms/NavLink';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './NavLink.styles';

const NavLink = ({ icon, children, href }: NavLinkType) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} passHref legacyBehavior>
      <S.Anchor className={pathname === href ? 'is-active' : ''}>
        {icon && <Icon icon={icon.type} size={icon.size} />}
        {children}
      </S.Anchor>
    </Link>
  );
};

export default NavLink;
