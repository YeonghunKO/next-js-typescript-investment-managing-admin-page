import { atom } from 'recoil';

export const loginUserInfo = atom({
  key: 'loginUserInfo',
  default: { email: '', password: '' },
});
