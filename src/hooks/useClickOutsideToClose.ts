import { useEffect, type RefObject, useCallback } from 'react';

export default function useClickOutsideToClose<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void,
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current !== null) {
        const { x, y, width, height } = ref.current.getBoundingClientRect();
        const { clientX, clientY } = event;
        if (
          clientX < x ||
          clientX > x + width ||
          clientY < y ||
          clientY > y + height
        ) {
          onClickOutside();
        }
      }
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
}
