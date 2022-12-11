import { IconsKey } from '@components/atoms/Icons/Icon';
import { ROUTER } from '@constants/router';
import { valueOf } from '@type/common';

type siderItemDataType = {
  text: string;
  href: valueOf<typeof ROUTER>;
  icon: keyof IconsKey;
};

type SiderDataType = siderItemDataType[];

interface SiderType {
  sider: SiderDataType;
}

export type { siderItemDataType, SiderDataType, SiderType };
