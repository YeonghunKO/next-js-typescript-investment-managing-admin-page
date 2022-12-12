import { IconsKey } from '@components/atoms/Icons/Icon';
import { ROUTER } from '@constants/router';

export const ACCOUNTS_DATA = {
  header: {
    title: '투자계좌',
    icons: ['Bell', 'Question', 'User'],
  },

  sider: [
    { text: '계좌목록', href: ROUTER.ACCOUNTS, icon: 'Chart' as const },
    { text: '사용자목록', href: ROUTER.USERS, icon: 'UserCircle' as const },
  ],
};
