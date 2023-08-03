import type { SiderType } from "@type/molecules/Sider";
import { useRecoilValue } from "recoil";
import { isSiderVisibleState } from "@store/isSiderVisibleAtoms";
import NavLink from "../NavLink";

import * as S from "./Sider.styles";

const Sider = ({ sider }: SiderType) => {
  const isSiderVisible = useRecoilValue(isSiderVisibleState);
  return (
    <S.Container isVisible={isSiderVisible}>
      <S.Header>DnC</S.Header>
      {sider.map(({ text, icon, isActive, ...props }, idx) => (
        <NavLink key={idx} isActive={isActive} icon={{ type: icon }} {...props}>
          {text}
        </NavLink>
      ))}
    </S.Container>
  );
};

export default Sider;
