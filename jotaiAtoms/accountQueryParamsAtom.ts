import { atomWithHash } from 'jotai-location';

export const accountQueryParamsAtom = atomWithHash('accountQueryParamsAtom', {
  pageNum: 1,
  q: '',
});
