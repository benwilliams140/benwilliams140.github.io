import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import type { SidebarItemProps } from './SidebarItem';
import { SidebarContext } from './Sidebar.context';
import { useClickOutsideToClose } from '../../hooks';
import clsx from 'clsx';

export { default as SidebarItem } from './SidebarItem';

export type SidebarProps = {
  selectedItem: SidebarItemProps['id'];
  setSelectedItem: Dispatch<SetStateAction<SidebarItemProps['id']>>;
  children: ReactElement<SidebarItemProps> | ReactElement<SidebarItemProps>[];
};

export default function Sidebar({
  selectedItem,
  setSelectedItem,
  children,
}: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOnClick = useCallback(() => {
    if (!hasOpened) {
      setHasOpened(true);
    }
    setIsOpen(prev => !prev);
  }, [hasOpened]);

  useClickOutsideToClose(ref, () => setIsOpen(false));

  return (
    <SidebarContext.Provider
      value={{ selectedItem, setSelectedItem, setIsOpen }}
    >
      {/** Hamburger Icon */}
      <div
        className={clsx('hamburger group', 'absolute top-3 right-1')}
        onClick={handleOnClick}
      >
        <div
          className={clsx(
            'hamburger-patty',
            isOpen && '-rotate-45 translate-y-3',
          )}
        />
        <div className={clsx('hamburger-patty', isOpen && 'opacity-0')} />
        <div
          className={clsx(
            'hamburger-patty',
            isOpen && 'rotate-45 -translate-y-3',
          )}
        />
      </div>
      {/** Sidebar */}
      <div
        ref={ref}
        className={clsx(
          'border-3px border-r-none border-solid border-rounded-l-4 border-border',
          'z-$z-index-sidebar',
          'position-absolute top-0',
          'bg-primary',
          'transition-transform',
          'min-w-275px h-full',
          'box-border',
          'right-0',
          hasOpened ? 'animate-duration-125' : 'animate-duration-none',
          isOpen
            ? 'display-visible animate-slide-in-right'
            : 'animate-slide-out-right animate-forwards',
        )}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
