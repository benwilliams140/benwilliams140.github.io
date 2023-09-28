import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import type { SidebarProps } from '.';

type SidebarContextType = Pick<
  SidebarProps,
  'selectedItem' | 'setSelectedItem'
> & { setIsOpen: Dispatch<SetStateAction<boolean>> };

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export function useSidebarContext() {
  const sidebarContext = useContext(SidebarContext);
  if (!sidebarContext) {
    throw new Error();
  }
  return sidebarContext;
}
