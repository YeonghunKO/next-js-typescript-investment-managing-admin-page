import { atom } from 'recoil';
import { ACCOUNTS_DATA } from 'data/accounts';

export const accountDataState = atom({
  key: 'accountData',
  default: ACCOUNTS_DATA,
});
