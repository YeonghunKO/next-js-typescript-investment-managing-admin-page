import Icon from '@components/atoms/Icons/Icon';
import type { NavLinkType } from '@type/organisms/NavLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import * as S from './NavLink.styles';

const NavLink = ({ icon, children, href, isActive = false }: NavLinkType) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <S.Anchor className={isActive ? 'is-active' : ''}>
        {icon && <Icon icon={icon.type} size={icon.size} />}
        {children}
      </S.Anchor>
    </Link>
  );
};

export default NavLink;
