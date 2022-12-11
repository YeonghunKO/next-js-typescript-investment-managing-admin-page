import Icon from '@components/atoms/Icons/Icon';
import type { NavLinkType } from '@type/organisms/NavLink';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  return (
    <Link href={href} passHref legacyBehavior>
      <S.Anchor
        {...props}
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
