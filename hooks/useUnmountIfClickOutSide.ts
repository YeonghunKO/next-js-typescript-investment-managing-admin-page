import { useEffect, RefObject, useCallback } from 'react';

export const useUnmountIfClickedOutside = (
  ref: RefObject<HTMLFormElement | HTMLDivElement> | undefined,
  callback: () => void
) => {
  const handleClick = useCallback(
    (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (!ref) return;
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
};

export default useUnmountIfClickedOutside;
