import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'accountQueryParams',
  storage: sessionStorage,
});

export const accountQueryParamsState = atom({
  key: 'accountQueryParams',
  default: sessionStorage?.getItem('accountQueryParams') || {
    pageNum: 1,
    q: '',
  },
  effects_UNSTABLE: [persistAtom],
});
