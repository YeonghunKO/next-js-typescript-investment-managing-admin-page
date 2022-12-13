import { useEffect } from 'react';
export const useDebounce = (
  callback: Function,
  value: string | undefined,
  delay: number = 600
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
};
