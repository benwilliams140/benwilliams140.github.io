import { createContext, useContext } from 'react';
import type { ScrollablePanelProps } from '.';

type ScrollablePanelContextType = Pick<ScrollablePanelProps, 'selectedItem'> & {
  scrollToNextItem: (curIndex: number) => void;
  scrollToPreviousItem: (curIndex: number) => void;
  pageIds: string[];
};

export const ScrollablePanelContext = createContext<
  ScrollablePanelContextType | undefined
>(undefined);

export function useScrollablePanelContext() {
  const scrollablePanelContext = useContext(ScrollablePanelContext);
  if (!scrollablePanelContext) {
    throw new Error();
  }
  return scrollablePanelContext;
}
